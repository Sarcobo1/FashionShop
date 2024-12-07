import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout=({ children })=>{
    return (
        <>
            <Header/>
            <data>{children}</data> 
            <Footer/>
        </>
    )
}
export default Layout