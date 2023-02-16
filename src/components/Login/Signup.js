import React,{Fragment, useEffect, useState} from "react";
import {Link, useParams } from 'react-router-dom';
import { useSelector,useDispatch } from "react-redux";
import { register } from "../../actions/userActions";
import loginImage from "../../images/login.png";
import signDark from "../../images/signdark.png";
import signLight from "../../images/signlight.png";


function Signup()
{const dispatch=useDispatch();
    const [email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[name,setName]=useState("");
    const[username,setUsername]=useState("");
    const{loading,isAuthenticated,user,error}=useSelector(state=>state.user)
    const registerSubmit=(e)=>
    {e.preventDefault();
        dispatch(register(email,password,name,username))
        if(error)
        {
            window.alert(error);
        }
  
    }
    useEffect(()=>
    {
        if(isAuthenticated)
        {
            window.alert("Successful");
        }
       
    
        

    },[isAuthenticated,error])
    return(
        <>
        <div class="signupForm">
        <h1>Log In With Email</h1>
            <form  onSubmit={registerSubmit} method="POST" action="/">
            <div className="loginDiv">
                <input className="loginInput" type="text" name="email" placeholder="Enter Your Email" 
                onChange={(e)=>setEmail(e.target.value)}></input>
                <input className="loginInput" type="text" name="password" placeholder="Enter Your Password"
                onChange={(e)=>setPassword(e.target.value)}></input>
                 <input className="loginInput" type="text" name="name" placeholder="Enter Your Name"
                onChange={(e)=>setName(e.target.value)}></input>
                 <input className="loginInput" type="text" name="username" placeholder="Enter Your Username"
                onChange={(e)=>setUsername(e.target.value)}></input>
                </div>
                  <button type="submit" name="submit" className="logSubmit">SignUp</button>
                
            </form>
            <span>Already Have an Account? <Link to="/login">Login</Link></span>
            </div>
            <div className="signupImage">
            <img src={loginImage}></img>
            </div>
            <div className="signupVector">
            <img src={signLight} className="signupLight"></img>
            <img src={signDark} className="signupDark"></img>
            
            </div>
        </>
    )
}
export default Signup;