import { createContext, ReactNode, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, OAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, } from "firebase/auth";
import app from "../config/firebase.config";


interface Props {
    children?: ReactNode
}

export const AuthContext = createContext({})

const auth = getAuth(app)

function AuthProvider({ children, ...props }: Props) {

    const googleProvider = new GoogleAuthProvider()
    const facebookProvider = new FacebookAuthProvider()
    const githubProvider = new GithubAuthProvider()
    const yahooProvider = new OAuthProvider('yahoo.com')

    const [user, setUser] = useState(null)


    const googleSignUp = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const facebookSignUp = () => {
        return signInWithPopup(auth, facebookProvider)
    }
    const githubSignUp = () => {
        return signInWithPopup(auth, githubProvider)
    }
    const yahooSignUp = () => {
        return signInWithPopup(auth, yahooProvider)
    }

    const signUp = (email: string, password: string) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateSignUpProfile = (name: string, image: string) => {
        if (auth.currentUser) {
            return updateProfile((auth.currentUser), {
                displayName: name,
                photoURL: image
            })
        }
    }

    const verifyEmail = () => {
        if (auth.currentUser) {
            return sendEmailVerification(auth.currentUser)
        }
    }

    const signInUser = (email: string, password: string) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOutUser = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser: any) => {
            setUser(currentUser)
        })

        return () => {
            unsubscribe()
        }
    }, [])

    const person = {
        signUp,
        updateSignUpProfile,
        user,
        logOutUser,
        signInUser,
        verifyEmail,
        googleSignUp,
        facebookSignUp,
        yahooSignUp,
        githubSignUp
    }

    return (
        <AuthContext.Provider value={person} {...props}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;