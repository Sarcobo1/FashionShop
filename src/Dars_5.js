import React from "react";
import { useLocation } from "react-router-dom";

function Table(){
    const loc=useLocation()
    console.log(loc.state);
    return(
        <>
        table
        </>
    )
}
export default Table 