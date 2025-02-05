import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import './App.css'
import Home from "./Home";


function App(){
  const [openSidebarToggle, setOpenSidebarToggle]=useState(false)

  const OpenSidebar=()=>{
    setOpenSidebarToggle(!openSidebarToggle)
  }
      return(
        <div className="grid-container">
            <Header OpenSidebar={OpenSidebar}/>
            <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
            <Home/>
        </div>
      )
}
export default App