import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPost, post } from "../../actions/postActions";
import { getUser } from "../../actions/userActions";
import "./Post.css";

const Post=()=>{
    const dispatch=useDispatch();
    const{loading,post}=useSelector(state=>state.post)
    const {id}=useParams();
    useEffect(()=>{
            dispatch(getPost(id));
            dispatch(getUser());

    },[dispatch])

    return(
        <>
       <div className="PostPage">
       <h1>{post.heading}</h1>
       <h3>({post.category})</h3>
       <div className="postBody">{post.body}</div>
       <img src={post.image}></img>
       <h4>Deadline:{post.deadline}</h4>
       <div className="postSkills"><h5>Skills Required:</h5>
       {post.skills}
       </div>
       <div className="postSteps"><h4>Steps To Be Followed:</h4><br></br>{post.steps}</div>

       </div>

        </>
    )
}
export default Post;