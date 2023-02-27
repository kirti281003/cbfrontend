import { useDispatch } from "react-redux";
import { deleteSub } from "../../actions/subAction";
import "./SubElement.css";
const SubElement=({title,sub})=>{
    const dispatch=useDispatch();
    function viewsubfunc()
    {
        window.location.href=`/getSubmission/${sub._id}`
        
    }
    function del()
    {
            dispatch(deleteSub(sub._id))
            window.location.href="/user/submissions";
    }
return(
   
    <>
      
        <div class="flexcard1 flexcardGreen">
            <div class="flexcardNumber flexcardNumberGreen">{sub.postname} <button className="deletesub" onClick={del}><i class="delicon fas fa-trash"></i></button></div>
            <div class="flex flexcardTitle"></div>
                    <button className="viewsubbutton1" onClick={viewsubfunc}>View Submission</button>
                </div>
           
    </>
)
}
export default SubElement