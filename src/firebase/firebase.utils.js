import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
<<<<<<< HEAD
import "firebase/storage";
import firebaseConfig from "./firebase.config.json";
=======
import firebaseConfig from "./firebase.config.json";
import firebaseTestingConfig from "./firebase.testing-config.json";
>>>>>>> f5265db1edaf745d6f51ad29bccb2acde18f5c0d

const config = firebaseConfig;
const testingConfig = firebaseTestingConfig;

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = database.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error in creating user", error.message);
    }
  }
  return userRef;
};

<<<<<<< HEAD
export const getImageFromSource = async (imageSrc) => {
  let imageStorageReference = firebase.storage().ref(imageSrc);
  return imageStorageReference.getDownloadURL();
};

export async function getUserDocument(userId) {
  const documentReference = database.collection("users").doc(userId);

  return documentReference
    .get()
    .then((userDocument) => {
      if (userDocument.exists) {
        return userDocument.data();
      }
    })
    .catch((err) => {
      console.log("Unable to fetch UserDocument ", err);
    });
=======
export async function getUserDocument(userAuth) {
  if (!userAuth) return;
  const userRef = database.collection("users").doc(userAuth.uid);

  return await userRef
    .get()
    .then((snapShot) => {
      if (snapShot.exists) {
        return snapShot;
      }
    })
    .catch((err) => {
      console.log("Unable to fetch UserDocument ", err);
    });
}

if (!process.env.NODE_ENV === "development") {
  firebase.initializeApp(testingConfig);
} else {
  firebase.initializeApp(config);
>>>>>>> f5265db1edaf745d6f51ad29bccb2acde18f5c0d
}

export const auth = firebase.auth();
export const database = firebase.firestore();
<<<<<<< HEAD
export const storage = firebase.storage();
=======
>>>>>>> f5265db1edaf745d6f51ad29bccb2acde18f5c0d
