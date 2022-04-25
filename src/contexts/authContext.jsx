import { createContext,useState } from "react";


export const authContext=createContext()

export const AuthContext=({children})=>{
        const [auth,setAuth]=useState(false)
        const handleAuth=(status)=>{
            setAuth(status)
        }
    return <authContext.Provider value={{auth,handleAuth}}>{children}</authContext.Provider>
}