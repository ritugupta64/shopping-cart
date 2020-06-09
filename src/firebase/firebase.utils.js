import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyBJEQ4LZhaoGgLWAGmRiEadJznYst2aX9w",
  authDomain: "shopping-cart-ritu.firebaseapp.com",
  databaseURL: "https://shopping-cart-ritu.firebaseio.com",
  projectId: "shopping-cart-ritu",
  storageBucket: "shopping-cart-ritu.appspot.com",
  messagingSenderId: "13836488301",
  appId: "1:13836488301:web:2c3d5be221510de821f964",
  measurementId: "G-PSDNNXEYLC",
};

export const createUserProfileDocument = async (userAuth, aditionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...aditionalData,
      });
    } catch (error) {
      console.log("error", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
