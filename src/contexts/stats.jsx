import { Children, createContext, useState } from "react";


export const statsContext=createContext();

export const StatsContext=({children})=>{
    const [stats,setStats]=useState({
        terminated:0,
        promoted:0,
        new:0
    })
    const handleChange=(ref)=>{
        setStats({...stats,[ref]:stats[ref]+1})
    }
    return <statsContext.Provider value={{stats,handleChange}}>{children}</statsContext.Provider>
}