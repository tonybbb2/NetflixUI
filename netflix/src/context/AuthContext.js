import { createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../Firebase'
import {
    createUserWithEmailAndPassword, signInWithEmailAndPassword,
    signOut, onAuthStateChanged
} from 'firebase/auth'

const AuthContext = createContext()

export function AuthContextProvider({ children }) {

    const [user, setUser] = useState({})

    function signUp(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function logOut() {
        return signOut(auth)
    }

    function signIn(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user)
        });
        return () => unsubscribe();
    }, [])

    return (
        <AuthContext.Provider value={{ signUp, logOut, signIn, user }}>
            {children}
        </AuthContext.Provider>

    )
}

export function UserAuth() {
    return useContext(AuthContext)
}