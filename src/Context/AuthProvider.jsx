import { useEffect, useState } from "react";
import { auth } from "../Config/__config__final__auth";
import { AuthContext } from "./AuthContext";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const createUser = (email, pass) => {
        return createUserWithEmailAndPassword(auth, email, pass)
    }

    const logIn = (email, pass) => {
        return signInWithEmailAndPassword(auth, email, pass)
    }
    // onAuthStateChanged(auth, (currentUser) => {
    //     console.log("this is current user", currentUser);
        

    // })
    const signout = () => {
        return signOut(auth)
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("current user inside the useEffect on auth state change", currentUser);
            setUser(currentUser)
            
        })
        return () => {
            unSubscribe()
        }
    },[])
    const userInfo = {
        user,
        createUser,
        logIn,
        signout
    }
    return (
        <AuthContext value={userInfo}>{children}</AuthContext>
    );
};

export default AuthProvider;