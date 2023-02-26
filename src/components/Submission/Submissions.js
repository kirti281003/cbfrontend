import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { submissions } from "../../actions/subAction";
import SubElement from "./SubElement";

const Submissions=()=>
{const dispatch=useDispatch();
    const{subs,loading}=useSelector(state=>state.subs)
    useEffect(()=>
    {
        dispatch(submissions())
    },[dispatch])
    return(
        <>
        <div className="flexbox">
        {
            subs &&
            subs.map(sub=>
            (
                <SubElement sub={sub}/>
            )

            )
        }
        </div>

        </>
    )

}
export default Submissions;