import React,{Fragment, useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import { useSelector,useDispatch } from "react-redux";
import { registerPost } from "../../actions/postActions";
import { getUser } from "../../actions/userActions";
import loginImage from "../../images/login.png";
import "./SubmissionRegister.css";
import { registerSub } from "../../actions/subAction";

function SubmissionRegister()
{const dispatch=useDispatch();

    const {id,name}=useParams();
    const[body,setBody]=useState("");
    const[photo,setImage]=useState();
    const[link1head,setLink1head]=useState("");
    const[link1,setLink1]=useState("");
    const[link2head,setLink2head]=useState("");
    const[link2,setLink2]=useState("");
    const[link3head,setLink3head]=useState("");
    const[link3,setLink3]=useState("");
    const links=[{title:link1head,url:link1},{title:link2head,url:link2},{title:link3head,url:link3}];
    useEffect(()=>
    {dispatch(getUser());  

    },[dispatch])
    const submitSub=(e)=>
    {e.preventDefault();
        dispatch(registerSub(body,JSON.stringify(links),photo,id,name))
    }
    return(
        <>
            <form className="postform" action="/createPost" method="POST" onSubmit={submitSub}>
            <div className="col">
                <label>Write what you want the hirer to know</label>
                <div class="login__field">
                
					<textarea type="text" rows="20" cols="50" class="textarea__input" onChange={(e)=>setBody(e.target.value)}
                    />
				</div>
                </div>

                <div className="col">
             <label>Link 1</label>
                <div class="login__field">
                <input type="text" class="sign__input" placeholder=" " onChange={(e)=>setLink1head(e.target.value)}
                    />
					<input type="text" class="login__input" placeholder=" " onChange={(e)=>setLink1(e.target.value)}
                    />
				</div>
                <label>Link 2</label>
                <div class="login__field">
                <input type="text" class="sign__input" placeholder=" " onChange={(e)=>setLink2head(e.target.value)}
                    />
					<input type="text" class="login__input" placeholder=" " onChange={(e)=>setLink2(e.target.value)}
                    />
				</div>
                <label>Link 3</label>
                <div class="login__field">
                <input type="text" class="sign__input" placeholder=" " onChange={(e)=>setLink3head(e.target.value)}
                    />
					<input type="text" class="login__input" placeholder=" " onChange={(e)=>setLink3(e.target.value)}
                    />
				</div>
                <label>Any Image You Want To Upload</label>
                <div class="login__field">
					
					<input type="file" class="login__input" placeholder=" "  onChange={(e)=>setImage(e.target.files[0])}
                    />
				</div>
                <button className="submissionButton">Create Submission</button>
                </div>
            </form>
        </>
    )
}
export default SubmissionRegister;