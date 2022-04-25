import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { statsContext } from "../contexts/stats";

export const Home = () => {
  // create statistics for user.
  // get Total user count from DB,
  // other fields are in memory values stored in context API.
  // they will reset to 0
  // if page gets refreshed

  // thins to store in context api
  //   total: get from db,
  const [count,setCount]=useState(0)
  const {stats}=useContext(statsContext)
  useEffect(()=>{
    axios.get("http://localhost:8080/employee").then(({data})=>setCount(data.length))
  }),[]
  //   terminated: 0, // inc when user in terminated
  //   promoted: 0,// inc when user in promoted
  //   total_new: 0,// inc when a new user in created

  return (
    <>
      <h3 className="welcome">Welcome To employee management system</h3>
      <div className="home">
        <span>Stats</span>
        <div>
          Total Employees<span className="totalemp">  {count}</span>
        </div>
        <div>
          Total Terminated: <span className="total_terminated">{stats.terminated}</span>
        </div>
        <div>
          Total Promoted: <span className="total_promoted">{stats.promoted}</span>
        </div>
        <div>
          Total New: <span className="total_new">{stats.new}</span>
        </div>
      </div>
    </>
  );
};
