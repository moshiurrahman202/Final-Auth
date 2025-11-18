import { useEffect, useState } from "react";
import { auth } from "../Config/__config__final__auth";
import { AuthContext } from "./AuthContext";
import { signInWithPopup, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, GoogleAuthProvider } from "firebase/auth";


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const provider = new GoogleAuthProvider();
    const createUser = (email, pass) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, pass)
    }

    const logIn = (email, pass) => {
        setLoading(setLoading(true))
        return signInWithEmailAndPassword(auth, email, pass)
    }
    const signInWithGoogle = () => {
       return signInWithPopup(auth, provider)
    }
    // onAuthStateChanged(auth, (currentUser) => {
    //     console.log("this is current user", currentUser);
        

    // })
    const signout = () => {
        setLoading(true)
        return signOut(auth)
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("current user inside the useEffect on auth state change", currentUser);
            setUser(currentUser)
            setLoading(false)
            
        })
        return () => {
            unSubscribe()
        }
    },[])
    const userInfo = {
        user,
        createUser,
        logIn,
        signout,
        loading,
        signInWithGoogle
    }
    return (
        <AuthContext value={userInfo}>{children}</AuthContext>
    );
};

export default AuthProvider;