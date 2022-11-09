import firebase from "firebase/compat/app";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  where,
  query,
} from "firebase/firestore";

require("dotenv").config();

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

const app = firebase.initializeApp(config);
export const db = getFirestore(app);

const addEmail = async (email) => {
  const emailsRef = collection(db, "emails");

  // Create a query against the collection.
  const q = query(emailsRef, where("email", "==", email));

  const querySnapshot = await getDocs(q);
  const emailDoesNotExists = querySnapshot.size == false;

  console.log("emailDoesNotExists", emailDoesNotExists);

  if (emailDoesNotExists) {
    try {
      console.log("Email creation...");

      await addDoc(emailsRef, {
        email,
        createdAt: new Date(),
      });
      console.log("Email created");
      return true;
    } catch (error) {
      console.log("error creating email", error.message);
      throw {
        error: "Sorry, an internal error has occurred. Please try again later.",
        statusCode: 500,
      };
    }
  } else {
    throw { error: "Email already exists", statusCode: 400 };
  }
};

const getAllEmails = async () => {
  const emailsRef = collection(db, "emails");
  const q = query(emailsRef);
  const querySnapshot = await getDocs(q);

  const emails = [];
  querySnapshot.forEach((doc) => {
    emails.push(doc.data().email);
  });
  return emails;
};

module.exports = {
  addEmail,
  getAllEmails,
};
