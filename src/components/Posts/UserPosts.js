
import { userPosts } from "../../actions/postActions";
import { getUser, logout } from "../../actions/userActions";
import "./AllPosts.css";
import PostCard from "./PostCard";

const { useEffect } = require("react");
const { useDispatch, useSelector } = require("react-redux")

function UserPosts()
{
    const dispatch=useDispatch();
    const{loading,error,posts}=useSelector(state=>state.posts)
    useEffect(()=>
    {
    // {dispatch(getUser())
        dispatch(userPosts())
    },[dispatch])
  
    return(
        <> <h1>Posts By You</h1>
                  <div class="Post">
                 
        {posts &&
        posts.map(post=>(
            <PostCard post={post} url={`/post/${post._id}`} name="View Post" url2={`/postSubmission/${post._id}`} name2="View Submissions"/>
        ))}
        </div>
        {/* <input type="submit" name="logout" onClick={logoutSubmit}/> */}
          
        </>
    )
}
export default UserPosts;