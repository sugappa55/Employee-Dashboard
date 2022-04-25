
import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { authContext } from "../contexts/authContext";
export const Login = () => {
  //  use reqres to log user in.
const [det,setDet]=useState({})
const navigate=useNavigate()
const {handleAuth}=useContext(authContext)

  const handleChange=(e)=>{
    const {id,value}=e.target;
    setDet({...det,[id]:value})

  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(det)
    axios.post("https://reqres.in/api/login",det).then(({data})=>{
       if(data.token)handleAuth(true)
   navigate(-2)
    })
  }

  return (
    <form className="loginform" onSubmit={(e)=>handleSubmit(e)}>
      <input
       id="email"
      onChange={handleChange}
        name="username"
        type="text"
        placeholder="Enter username"
        className="login_username"
      />
      <input id="password"
            onChange={handleChange}
        name="password"
        type="text"
        placeholder="Enter password"
        className="login_password"
      />
      <input type="submit" value="SIGN IN" className="login_submit" />
    </form>
  );
};
