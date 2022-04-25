import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import { authContext } from "../contexts/authContext";

export const Logout = () => {
  // log user out. it's just an inmemory value in context api
const navigate=useNavigate()
  const {handleAuth}=useContext(authContext)
  useEffect(()=>{
    handleAuth(false)
navigate("/")
  },[])
  return <div></div>;
};
