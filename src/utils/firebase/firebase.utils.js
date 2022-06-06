import { initializeApp } from 'firebase/app'
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAlHX8yzO3DjZKB3rG0d1hlrGLOGwXke-Q",
    authDomain: "crwn-clothing-db-c17e0.firebaseapp.com",
    projectId: "crwn-clothing-db-c17e0",
    storageBucket: "crwn-clothing-db-c17e0.appspot.com",
    messagingSenderId: "282177065740",
    appId: "1:282177065740:web:3fae4565410ab85cd8ef29"
  };
  
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
    prompt: 'select_account'

})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid)
    
    console.log(userDocRef)

    const userSnapshot = await getDoc(userDocRef)
    console.log(userSnapshot)
    console.log(userSnapshot.exists())

    //check if user data exist if it does then return user doc ref

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth
        const createdAt = new Date()

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,                
            })
            
        } catch (error) {
            console.log('error creating the user', error.message)
        }
    } 

    return userDocRef

}
