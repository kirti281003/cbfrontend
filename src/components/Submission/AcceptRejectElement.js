import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { acceptsub, postsubmissions } from "../../actions/subAction";
import { getUser } from "../../actions/userActions";
import "./AcceptRejectElement.css";
const AcceptRejectElement=({title,sub,id})=>{
    function viewsubfunc()
    {
        window.location.href=`/getSubmission/${sub._id}`
        
    }
    const{message}=useSelector(state=>state.accept);
    console.log(message);
    const dispatch=useDispatch();
    var msg;
    function acceptpost(e){
        
        e.preventDefault();
        msg="accept";
        if(
        dispatch(acceptsub(sub._id,msg)))
        {
       window.location.href=`/postSubmission/${id}`;
        }
       
    }
    function rejectpost(e){
        
        e.preventDefault();
        msg="reject";
        if(
        dispatch(acceptsub(sub._id,msg)))
        {
       window.location.href=`/postSubmission/${id}`;
        }
       
    }
    useEffect(()=>{
dispatch(getUser())
    },[dispatch])
return(
   
    <>
      
        <div class="flexcard flexcardGreen">
            <div class="flexcardNumber flexcardNumberGreen">{sub.username} (<h5> {sub.accepted} </h5>)</div>

            <button className="viewsubbutton" onClick={viewsubfunc}>View Submission</button>
            
            <div className="decision">
            <button className="accept" onClick={acceptpost}>Accept</button>
            <button className="reject" onClick={rejectpost}>Reject</button>
            </div>
                    
                </div>
           
    </>
)
}
export default AcceptRejectElement