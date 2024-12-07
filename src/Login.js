import { useState } from 'react';
import React from 'react';
import "./Login.css"
import 'boxicons/css/boxicons.min.css';




function Login(){
    // const [login, setLogin] = useState("")
    // const [password, setPassword] = useState("")

    const getData = (event)=>{
        event.preventDefault();
        console.log(event.target.login.value);
        console.log(event.target.password.value);
        
        
    }

    return(
        <div>
            <div className="block"></div>
                <div className="head"><h1>Sign Up</h1></div>
            
            <form onSubmit={getData}>
                <div className="inp"><input type="text" placeholder='Your Email' name='login'/></div>
                <div className="inp2"><input type="text" placeholder='Password' name='password'/></div>
            <div className="inp3"> <input type="submit" placeholder='Send' /></div>
            </form>
            <div className="text_1"><span>Already have an accaunt? <p>Login In</p></span></div>
               <div className="line"></div>
               <div className="text_2"><p>Or</p></div>
            <div className="line2"></div>
                <div className="block2"><p><i class='bx bxl-google' ></i> Sign up with Google</p></div>
            
        </div>
    )
}
export default Login