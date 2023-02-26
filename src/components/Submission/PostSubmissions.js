import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { postsubmissions, submissions } from "../../actions/subAction";
import AcceptRejectElement from "./AcceptRejectElement";

const PostSubmissions=()=>
{const dispatch=useDispatch();
    const{id}=useParams();
    const{subs,loading}=useSelector(state=>state.subs)
    console.log(subs);
    useEffect(()=>
    {
        dispatch(postsubmissions(id))
    },[dispatch])

    
    return(
        <>
         <div className="flexbox">
        {
            subs &&
            subs.map(sub=>
            (
              <AcceptRejectElement sub={sub} id={id}/>
            )

            )
        }
        </div>

        </>
    )
    
    // else{
    //     return(
    //         <>
    //          <div className="flexbox">
    //        No Submissions Yet
    //         </div>
    
    //         </>
    //     )
    // }

}
export default PostSubmissions;