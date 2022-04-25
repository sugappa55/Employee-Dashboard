import { useCallback, useContext } from "react"
import { Navigate } from "react-router"
import { authContext } from "../contexts/authContext"


export const ProtectedRoute=({children})=>{
     const {auth}=useContext(authContext)
     if(!auth)return <Navigate to="/login"/>
       return children
}