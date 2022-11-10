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
    subject: "Welcome to artom.io!",
    html: "<div>"
          +"<p>Hi there !</p>"
            +"<p>Thanks for signing up and welcome to the artom.io Community!</p>"
            +"<p>At artom.io, we are building a community-drivern platform where you will be able to buy, sell and collect shares of iconic artworks. Soon, you will be able to invest in iconic blue-chip artworks curated and verified by our team of expert curators.</p>"
            +"<p>We also aim to change the vision of art. We see art as a good for all and we want to democratize it and make it popular. All the art that the community acquire will be lent and displayed in a museum of our network... and you get to decide which one!</p>"
            +"<p>We will be launching soon and we look forward to having you starting your collection</p>"
            +"<p>In the meantime, you can follow us on our social media or reach out <a href='https://www.artom.io'>here</a></p>"
            +"<p>The artom.io team,</p>"
          +"</div>",
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
