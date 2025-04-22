import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDjcwkDT6Un3UbGp_YRH2fhBLkwO2hkb1A",
  authDomain: "react-team-4e800.firebaseapp.com",
  projectId: "react-team-4e800",
  storageBucket: "react-team-4e800.appspot.com",
  messagingSenderId: "439390085030",
  appId: "1:439390085030:web:bc8b56db0350ce24917967",
  measurementId: "G-5QLZYTDKGR"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

const googleProvider = new GoogleAuthProvider();


export { auth, firestore, googleProvider };
