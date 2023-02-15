import { allPosts } from "../../actions/postActions";

const { useEffect } = require("react");
const { useDispatch, useSelector } = require("react-redux")

function AllPosts()
{
    const dispatch=useDispatch();
    const{loading,error,posts}=useSelector(state=>state.posts)
    useEffect(()=>
    {
        dispatch(allPosts())
    },[dispatch])
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
          
        </>
    )
}
export default AllPosts;