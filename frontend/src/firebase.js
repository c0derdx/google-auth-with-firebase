import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";




const firebaseConfig = {
    //paste your config here
};
initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
export { auth, provider };