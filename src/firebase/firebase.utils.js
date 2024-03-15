import {initializeApp} from 'firebase/app'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import {  doc, getDoc, getFirestore, onSnapshot, setDoc} from 'firebase/firestore'


const config = {
    apiKey: "AIzaSyCI5jiZ1h9DYwPzv9dXiPjGSBRTNu9EU48",
    authDomain: "crwn-db-8ea68.firebaseapp.com",
    projectId: "crwn-db-8ea68",
    storageBucket: "crwn-db-8ea68.appspot.com",
    messagingSenderId: "271539323855",
    appId: "1:271539323855:web:9e7045fb624a18136588ba"
  }

export const createUserProfileDocument = async (userAuth, additionalData)=>{
  if(!userAuth) return;
  const userRef = doc(db, `users/${userAuth.uid}`);
  const snapShot = await getDoc(userRef);

  
  if(!snapShot.exists()){
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try{
      await setDoc(userRef,{
        displayName,
        email,
        createdAt,
        ...additionalData
      })

    }catch(error){
      console.log('Error creating user', error.message);
    }
  }

  return userRef;
}

const app = initializeApp(config);
export const auth = getAuth(app);
const db = getFirestore();
  

const provider = new GoogleAuthProvider();

export const signInWithGoogle = async() =>{ 
  try{
    const {user} = await signInWithPopup(auth, provider)
    // console.log(user);

  }catch(error){
    console.log(error.message);
  }
  }

