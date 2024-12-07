import React, {useState} from "react";

import { useNavigate } from "react-router-dom";

function Dars5(){
    const nav= useNavigate()
    const [name, setName] =useState("")
    const qoshish=(name)=>{
        nav(".table", {state: {name: name}})
        
    }
    return(
        <>
        <button onClick={()=>qoshish("fergana")}>fergana</button>
        <button onClick={()=>qoshish("fergana")}>fergana</button>
        <button onClick={()=>qoshish("fergana")}>fergana</button>
        </>
    )
}
export default Dars5