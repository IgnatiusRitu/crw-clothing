import {initializeApp} from 'firebase/app'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import {  getFirestore } from 'firebase/firestore'


const config = {
    apiKey: "AIzaSyCI5jiZ1h9DYwPzv9dXiPjGSBRTNu9EU48",
    authDomain: "crwn-db-8ea68.firebaseapp.com",
    projectId: "crwn-db-8ea68",
    storageBucket: "crwn-db-8ea68.appspot.com",
    messagingSenderId: "271539323855",
    appId: "1:271539323855:web:9e7045fb624a18136588ba"
  }

  const app = initializeApp(config);
  export const auth = getAuth(app);
  const db = getFirestore(app);
  

  const provider = new GoogleAuthProvider();
  
  export const signInWithGoogle = async() =>{ await signInWithPopup(auth, provider).then(result=>{
    const user = result.user;
    console.log(user.email)
  }).catch(error=>{
    const errorMessage = error.message;
    console.log(errorMessage)
  })}

