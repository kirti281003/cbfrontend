import React,{Fragment, useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import { useSelector,useDispatch } from "react-redux";
import { registerPost } from "../../actions/postActions";
import { getUser } from "../../actions/userActions";
import "../Login/Login.css";
import loginImage from "../../images/login.png";

function PostRegister()
{const dispatch=useDispatch();
    const [heading,setHeading]=useState("");
    const[category,setCategory]=useState("");
    const[body,setBody]=useState("");
    const{loading,error,post}=useSelector(state=>state.post)
    useEffect(()=>
    {dispatch(getUser());
      
        if(error)
        {
            window.alert(error);
        }    

    },[error])
    const submitPost=(e)=>
    {e.preventDefault();
        dispatch(registerPost(heading,category,body))
  
    }

    return(
        <><div className="loginForm">
              <h1>Create A Post</h1>
            <form  onSubmit={submitPost} method="POST" action="/">
                <input className="loginInput" type="text" name="heading" placeholder="Enter Heading" 
                onChange={(e)=>setHeading(e.target.value)}></input>
                <input className="loginInput" type="text" name="category" placeholder="Enter Category"
                onChange={(e)=>setCategory(e.target.value)}></input>
                 <input className="loginInput" type="text" name="body" placeholder="Enter Request"
                onChange={(e)=>setBody(e.target.value)}></input>
                 <div >
                <button type="submit" name="submit" className="logSubmit">Post</button>
                </div>
              
            </form>
            </div>
            <div className="loginImage">
            <img src={loginImage}></img>
        </div>
        </>
    )
}
export default PostRegister;