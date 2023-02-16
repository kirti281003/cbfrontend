import "./PostCard.css";
function PostCard({post})
{
    return(
        <>
        <div className="postcard">
            <h2>{post.heading}:-{post.category}</h2>
            <div className="postbody">
           {post.body}

            </div>
            {/* <h5>Category:-{post.category}</h5> */}
            <div className="postUser">{post.username}<br>
            </br>
            {post.email}</div>
        </div>

        </>
    )
}
export default PostCard;