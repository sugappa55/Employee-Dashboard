import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Cards } from "./styled";
export const EmployeeList = () => {
  const navigate=useNavigate()

const [em,setEm]=useState([])

useEffect(()=>{

  axios.get("http://localhost:8080/employee").then(({data})=>setEm(data))

},[])
  return (
    <Cards className="list_container">
      {/* On clicking this card anywhere, user goes to user details */}
      {em.map(e=><div className="employee_card" key={e.id} onClick={()=>{navigate(`/employees/${e.id}`)}}>
        <img className="employee_image" src={e.image} width="90%" height="75%"/>
        <span className="employee_name">{e.employee_name}</span><br/>
        <span className="employee_title">{e.title}</span>
      </div>)}
    </Cards>
  );
};
