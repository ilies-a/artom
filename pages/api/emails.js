const sgMail = require("@sendgrid/mail");
const EmailValidator = require("email-deep-validator");

const { addEmail } = require("../../firebase/firebase.utils");

require("dotenv").config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  const email = req.body.email;

  // Verifying the email :

  if (!email) {
    return res.status(400).json({ error: "Invalid email" });
  }

  const emailValidator = new EmailValidator();
  const { wellFormed, validDomain } = await emailValidator.verify(email);

  const emailIsValid = wellFormed && validDomain;
  if (!emailIsValid) {
    return res.status(400).json({ error: "Invalid email" });
  }

  // Adding email into the database :

  try {
    await addEmail(email);
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode).json({ error: err.error });
  }

  // Sending a greetings email to the added email :

  const msg = {
    to: email, // Change to your recipient
    from: "hello@artom.io", // Change to your verified sender
    subject: "Welcome to Artom",
    html: "<h2>Welcome to Artom !</h2>",
    text: "Welcome to Artom.",
  };

  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
      return res.status(201).json({ email });
    })
    .catch((error) => {
      console.error(error);
      return res.status(500).json({
        error: "Sorry, an internal error has occurred. Please try again later.",
      });
    });
}
