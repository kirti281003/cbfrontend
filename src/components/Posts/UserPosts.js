
import { userPosts } from "../../actions/postActions";
import { logout } from "../../actions/userActions";

const { useEffect } = require("react");
const { useDispatch, useSelector } = require("react-redux")

function UserPosts()
{
    const dispatch=useDispatch();
    const{loading,error,posts}=useSelector(state=>state.posts)
    useEffect(()=>
    {
        dispatch(userPosts())
    },[dispatch])
    const logoutSubmit=()=>{
        dispatch(logout());
        window.location.href="/login";
    }
    return(
        <>
        {posts &&
        posts.map(post=>(
            <div class="Post">
            <h3>{post.heading}</h3>
            <h6>{post.category}</h6>
            <p>{post.body}</p>

            </div>

        ))}
        <input type="submit" name="logout" onClick={logoutSubmit}/>
          
        </>
    )
}
export default UserPosts;