import React,{Fragment, useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import { useSelector,useDispatch } from "react-redux";
import { registerPost } from "../../actions/postActions";

function PostRegister()
{const dispatch=useDispatch();
    const [heading,setHeading]=useState("");
    const[category,setCategory]=useState("");
    const[body,setBody]=useState("");
    const{loading,error,post}=useSelector(state=>state.post)
    const submitPost=(e)=>
    {e.preventDefault();
        dispatch(registerPost(heading,category,body))
  
    }
    useEffect(()=>
    {if(post)
        {
            window.alert("Successfully Posted");
        }
        if(error)
        {
            window.alert(error);
        }    

    },[error])
    return(
        <>
            <form class="loginForm" onSubmit={submitPost} method="POST" action="/">
                <input className="" type="text" name="heading" placeholder="Enter Heading" 
                onChange={(e)=>setHeading(e.target.value)}></input>
                <input className="" type="text" name="category" placeholder="Enter Category"
                onChange={(e)=>setCategory(e.target.value)}></input>
                 <input className="" type="text" name="body" placeholder="Enter Request"
                onChange={(e)=>setBody(e.target.value)}></input>
                  <input type="submit" name="submit"></input>
              
            </form>
        </>
    )
}
export default PostRegister;