import React,{Fragment, useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import { useSelector,useDispatch } from "react-redux";
import { registerPost } from "../../actions/postActions";
import { getUser } from "../../actions/userActions";
import loginImage from "../../images/login.png";
import "./PostRegister.css";

function PostRegister()
{const dispatch=useDispatch();
    const [heading,setHeading]=useState("");
    const[category,setCategory]=useState("");
    const[body,setBody]=useState("");
    const[skills,setSkills]=useState("");
    const[deadline,setDeadline]=useState("");
    const[steps,setsteps]=useState("");
    const[photo,setImage]=useState();
    const{loading,error,post}=useSelector(state=>state.post)
    // useEffect(()=>
    // {dispatch(getUser());
      
    //     if(error)
    //     {
    //         window.alert(error);
    //     }    

    // },[error])
    const submitPost=(e)=>
    {e.preventDefault();

        dispatch(registerPost(heading,category,body,skills,deadline,steps,photo))
        dispatch(getUser())
  
    }

    // return(
    //     <><div className="loginForm">
    //           <h1>Create A Post</h1>
    //         <form  onSubmit={submitPost} method="POST" action="/">
    //             <input className="loginInput" type="text" name="heading" placeholder="Enter Heading" 
    //             onChange={(e)=>setHeading(e.target.value)}></input>
    //             <input className="loginInput" type="text" name="category" placeholder="Enter Category"
    //             onChange={(e)=>setCategory(e.target.value)}></input>
    //              <input className="loginInput" type="text" name="body" placeholder="Enter Request"
    //             onChange={(e)=>setBody(e.target.value)}></input>
    //              <div >
    //             <button type="submit" name="submit" className="logSubmit">Post</button>
    //             </div>
              
    //         </form>
    //         </div>
    //         <div className="loginImage">
    //         <img src={loginImage}></img>
    //     </div>
    //     </>
    // )
    return(
        <>
            <form className="postform" action="/createPost" method="POST" onSubmit={submitPost}>
            <div className="col">
            <label>Heading</label>
            <div class="login__field">
					
					<input type="text" class="login__input" onChange={(e)=>setHeading(e.target.value)}
                    />
				</div>
                <label>Category</label>
                <div class="login__field">
			
					<input type="text" class="login__input" onChange={(e)=>setCategory(e.target.value)}
                    />
				</div>
                <label>Add all the information about opportunity here</label>
                <div class="login__field">
                
					<textarea type="text" rows="10" cols="50" class="textarea__input" onChange={(e)=>setBody(e.target.value)}
                    />
				</div>
                <label>Deadline</label>
            <div class="login__field">
					
					<input type="text" class="login__input" onChange={(e)=>setDeadline(e.target.value)}
                    />
				</div>
                </div>
                <div className="col">
       
                <label>Skills Required</label>
                <div class="login__field">
                
					<textarea type="text" rows="5" cols="30" class="textarea__input" onChange={(e)=>setSkills(e.target.value)}
                    />
				</div>
                <label>Steps/Other Instructions</label>
                <div class="login__field">
                
					<textarea type="text" rows="10" cols="50" class="textarea__input" onChange={(e)=>setsteps(e.target.value)}
                    />
				</div>
                <label>Any Image You Want To Upload</label>
            <div class="login__field">
					
					<input type="file" class="login__input" placeholder=" " onChange={(e)=>setImage(e.target.files[0])}
                    />
				</div>
                <button>Create Post</button>
                </div>
            </form>
        </>
    )
}
export default PostRegister;