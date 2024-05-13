// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAikiOSJCGSmAkj97fnXfEisYBxWWqZbxo',
  authDomain: 'my-project-1525775894821.firebaseapp.com',
  projectId: 'my-project-1525775894821',
  storageBucket: 'my-project-1525775894821.appspot.com',
  messagingSenderId: '63538650114',
  appId: '1:63538650114:web:2bd5434f90f682823ddb1b',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);