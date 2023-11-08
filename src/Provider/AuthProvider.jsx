import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';

const auth = getAuth(app)
const provider = new GoogleAuthProvider;
export const authContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(false) 
    const [user, setUser] = useState([])

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }

    const loggedUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
const unsubscribe = onAuthStateChanged(auth, loggedUser => {
    setUser(loggedUser);
    setLoading(false)
}) 
return () => {
    unsubscribe();
}
    },[])


    const authInfo = {
        createUser,
        loggedUser,
        googleSignIn,
        loading,
        user,
        logOut
    }
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;