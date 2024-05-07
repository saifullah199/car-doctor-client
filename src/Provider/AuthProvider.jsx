import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import axios from "axios";


export const AuthContext = createContext(null)



const AuthProvider = ({children}) => {
    const [user,setUser] =useState(null)
    const [loading, setLoading] = useState(true)

    // create user
    const createUser = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email,password)
    }

    // sign in 
    const signIn = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    // logout
    const logOut =() => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
      const unsubscribe =  onAuthStateChanged(auth, currentUser =>{
        const userEmail = currentUser?.email || user?.email;
        const loggedUser = {email: userEmail}
            setUser(currentUser)
            console.log('user in the auth state changed', currentUser)
            
            setLoading(false)
            // if user exists then issue a token
            if(currentUser){
                
                axios.post('https://car-doctor-server-gamma-brown.vercel.app/jwt',loggedUser,{
                    withCredentials: true
                })
                .then(res => {
                    console.log(res)
                })
            }
            else{
                axios.post('https://car-doctor-server-gamma-brown.vercel.app/logout', loggedUser, {
                    withCredentials: true
                })
                .then(res => {
                    console.log(res)
                })
            }
        })
        return () => {
            return unsubscribe()
        }
    },[])
    const authInfo ={
        user,
        createUser,
        signIn,
        loading,
        logOut

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;