import { Link } from "react-router-dom";
import bgpost from "../../images/bgpost.png";
import "./PostCard.css";
function PostCard({post,url,name,url2,name2})
{var style={
    "backgroundImage":{bgpost}
}

    // return(
    //     <> 
    //           <div class="flexcard flexcardGreen">
    //         <div class="flexcardNumber flexcardNumberGreen">{post.heading}</div>
    //         <div class="flex flexcardTitle">{post.category}</div>
    //         <Link to={url} className="flexbutton" >{name}</Link>
            
    //         </div>
           
    //     </>
    // )
   return(
    <>
<div class="wrapper">
 
  <div class="cols">
			<div class="col" ontouchstart="this.classList.toggle('hover');">
				<div class="container">
					<div class="front" style={{backgroundImage:`url(${bgpost})`}} >
						<div class="inner">
							<p>{post.heading}</p>
              <span>{post.category}</span>
              <div>Deadline : {post.deadline}</div>
             
						</div>
					</div>
					<div class="back">
                 
						<div class="inner">
                        <div className="backbody">{post.body.substring(0,100)}...</div>
						  <p>
                          <Link to={url} className="linkButton">{name}</Link></p>
                          <Link to={url2} className="subLink">{name2}</Link>
						</div>
					</div>
				</div>
			</div>
            </div>
            </div>
    </>
   )
}
export default PostCard;