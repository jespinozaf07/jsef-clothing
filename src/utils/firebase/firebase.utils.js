// Import the functions you need from the SDKs you need
import { async } from '@firebase/util';
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// Your web app's Firebase configurationA
const firebaseConfig = {
  apiKey: 'AIzaSyCN3UsMlheJ7gsKeyDUS94k5W4Ht9J9nRY',
  authDomain: 'jsef-clothing-db.firebaseapp.com',
  projectId: 'jsef-clothing-db',
  storageBucket: 'jsef-clothing-db.appspot.com',
  messagingSenderId: '236166053796',
  appId: '1:236166053796:web:ee493eae9ec479fddf4b31',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);

  //if user data does not exist
  //create /set the document with the data form userAuth in my collection
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
      });
    } catch (error) {
      console.error('error creating the user', error.message);
    }
  }

  //if user data exists
  return userDocRef;
};
