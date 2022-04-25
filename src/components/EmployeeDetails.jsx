import axios, { Axios } from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { statsContext } from "../contexts/stats";

export const EmployeeDetails = () => {
  const {handleChange}=useContext(statsContext)
  const {id}=useParams()
  const [user,setUser]=useState({});
  useEffect(()=>{
    axios.get(`http://localhost:8080/employee/${id}`).then(({data})=>setUser(data))
  },[])
  var tasks=user.tasks
  console.log(tasks)
  return (
    <div className="user_details" style={{width:"13rem",height:"auto",margin:"auto",textAlign:"center",border:"1px solid blue"}}>
      <img className="user_image" src={user.image} />
      <h4 className="user_name">{user.employee_name}</h4>
      <span className="user_salary">${user.salary}</span>
      <span className="tasks">
    {tasks?tasks.map((e,i)=><li key={i} className="task">{e}</li>):""}
      </span>
      Status:<br/> <b className="status">{user.status}</b> <br />
      Title:<br/> <b className="title">{user.title}</b> 
      <br />
      {/* Show this button only if user is not already terminated (users status is working) */
         user.status!=="terminated"?<button className="fire" onClick={()=>{
          axios.patch(`http://localhost:8080/employee/${user.id}`,{status:"terminated"})
          handleChange("terminated")

         }} >Fire Employee</button>:""

      }
      <br />
      {/* Show this button only if user is not already team lead or terminated */
      user.status!=="terminated"&&user.title!=="Team Lead"?<button onClick={()=>{
        if(user.title="Sr Software Developer")var change="Team Lead"
       else  if(user.title="Jr Software Developer")var change="Sr Software Developer"
       else if(user.title==="intern"||user.title==="Intern") var change="Jr Software Developer"

           axios.patch(`http://localhost:8080/employee/${user.id}`,{title:change})
           handleChange("promoted")

      }} className="promote">promote</button>:""

      }
    </div>
  );
};
