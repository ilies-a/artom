const { getAllEmails } = require("../../firebase/firebase.utils");

require("dotenv").config();

export default async function handler(req, res) {
  /*const password = req.body.password;

  if (password !== process.env.FIREBASE_ADMIN_PAGE_PASSWORD) {
    return res.status(400).json({ error: "Invalid password" });
  }*/
  try {
    const emails = await getAllEmails();
    return res.status(200).json(emails);
  } catch (err) {
    return res
      .status(500)
      .json({
        error: "Sorry, an internal error occurred. Please try again later.",
      });
  }
}
