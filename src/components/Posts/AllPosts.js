import { allPosts } from "../../actions/postActions";
import PostCard from "./PostCard";
import "./AllPosts.css";
import { getUser } from "../../actions/userActions";
const { useEffect } = require("react");
const { useDispatch, useSelector } = require("react-redux")

function AllPosts()
{
    const dispatch=useDispatch();
    const{loading,error,posts}=useSelector(state=>state.posts)
    const {isAuthenticated,user}=useSelector(state=>state.user);

    useEffect(()=>
    {
        dispatch(getUser())
        dispatch(allPosts())
  
        
    },[dispatch])
    return(
        <>
        <div className="Post">
        {posts &&
        posts.map(post=>(
            
       <PostCard key={post._id} post={post}/>   

        ))}
        </div>
          
        </>
    )
}
export default AllPosts;