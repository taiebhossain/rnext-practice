// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB956nVJtKIw4czxtybXZ8zSUzaueFU5vg',
  authDomain: 'rnext-auth.firebaseapp.com',
  projectId: 'rnext-auth',
  storageBucket: 'rnext-auth.appspot.com',
  messagingSenderId: '209975453143',
  appId: '1:209975453143:web:83e7e66bbb055e57eb9792',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export async function registerWithEmailAndPassword(email, password) {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}

export async function loginWithEmailAndPassword(email, password) {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    return res;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}
