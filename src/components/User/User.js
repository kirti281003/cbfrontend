import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getUser } from "../../actions/userActions";
import UserPage from "./UserPage";
import rocket from "../../images/rocket.png";
import "./User.css";

function User()
{const dispatch=useDispatch();

    const {loading,isAuthenticated,user}=useSelector(state=>state.user)

    console.log(user);
    const{username}=useParams();
    useEffect(()=>
    {
        dispatch(getUser());
        // if(!isAuthenticated)
        // {
        //     window.alert("Please Login");
        //     window.location.href="/login";
        // }


    },[dispatch])


    return(
        <>
        <UserPage {...user}/>
        <div className="createpostdiv">
       <Link to="/createPost" className="createpostbutton">+</Link>
        </div>
    <div className="rocket"><img src={rocket}></img></div>

        </>
    )
}
export default User;