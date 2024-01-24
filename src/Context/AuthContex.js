import { createContext, useContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        sendPasswordResetEmail,
        signOut,
        updateProfile,
        onAuthStateChanged,
        GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import { auth } from '../Config/firebase'
import { db } from '../Config/firebase'
import { doc, setDoc, getDoc } from 'firebase/firestore';


const UserContext = createContext();

export const AuthContextProvider = ({children}) => {

    const [user, setUser] = useState({})


    const googleSignIn = async () => {
        const provider = new GoogleAuthProvider();
        try {
            // Sign in with Google
            const result = await signInWithPopup(auth, provider);
            
            // Check if the user already exists in the "users" collection
            const userRef = doc(db, 'users', result.user.uid);
            const userSnapshot = await getDoc(userRef);
            
            if (!userSnapshot.exists()) {
              // User doesn't exist, add them to the "users" collection
              const userData = {
                email: result.user.email,
                name: result.user.displayName,
                uid: result.user.uid,
              };
              await setDoc(userRef, userData);
            }
          } catch (error) {
            console.log(error);
          }
        }

    const createUser = async  (email, password, displayName) => {
        // Create user with email and password
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);

        // Update user profile with display name
        await updateProfile(userCredential.user, {
            displayName: displayName
        });

        // Store additional user details in Firestore
        const userRef = doc(db, 'users', userCredential.user.uid);
        await setDoc(userRef, {
            name: displayName,
            email: email,
            uid: userCredential.user.uid
            // Add more fields as needed
        });

        return userCredential.user;
        // return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword (auth, email, password);
    }

    const logout = () => {
        return signOut(auth);
    }

    const resetPassword = async (email) => {
          await sendPasswordResetEmail(auth, email);      
      };
    
    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            // console.log(currentUser)
            setUser(currentUser)
        })
        return () => {
            unsubscribe();
        }
    }, [])

    return (
        <UserContext.Provider value={{createUser, user, logout, signIn, resetPassword, googleSignIn}}>
            {children}
        </UserContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(UserContext)
}