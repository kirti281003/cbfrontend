import React,{Fragment, useEffect, useState} from "react";
import { Link, useParams } from 'react-router-dom';
import { useSelector,useDispatch } from "react-redux";
import { getUser, login } from "../../actions/userActions";
import loginImage from "../../images/login.png";
import  "./Login.css";
import User from "../User/User";


function Login()
{const dispatch=useDispatch();
    const [email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const{loading,isAuthenticated,user,error}=useSelector(state=>state.user)
    const loginSubmit=(e)=>
    {e.preventDefault();
        dispatch(login(email,password))
  
    }
    useEffect(()=>
    {
        if(isAuthenticated)
        {  window.location.href=`/user/${user.username}`;
        
           
        }
        if(error)
        {
            window.alert(error);
        }
    
        

    },[isAuthenticated,error,dispatch])
    return(
        <><div className="loginForm">
        <h1>Sign In With Email</h1>
            <form onSubmit={loginSubmit} method="POST" action="/login">
            <div className="loginDiv">
        
                <input  type="text" name="email" className="loginInput" placeholder="Enter Your Email" 
                onChange={(e)=>setEmail(e.target.value)}></input>
                </div>
           
              
                <input  type="password" name="password" className="loginInput" placeholder="Enter Your Password"
                onChange={(e)=>setPassword(e.target.value)}></input>
                
                <div >
                <button type="submit" name="submit" className="logSubmit">Login</button>
                </div>
            </form>
            <span>Create An Account <Link to="/signup">SignUp</Link></span>
        </div>
        <div className="loginImage">
            <img src={loginImage}></img>
        </div>

        </>
    )
}
export default Login;