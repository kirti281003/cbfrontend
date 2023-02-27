import "./Header.css";
import logo from "../../images/logo.png";
import avatar from "../../images/avatar.png";
import { Link } from "react-router-dom";
import { logout } from "../../actions/userActions";
import { useDispatch } from "react-redux";
function Header2()
{  const dispatch=useDispatch();
    const logoutSubmit=()=>{
    dispatch(logout());
    window.location.href="/login";
}
//     
return(
  <>
     <nav>
  <input type="checkbox" id="check"/>
  <label for="check" class="checkbtn">
    <i class="fas fa-bars"></i>
  </label>
  <label for="" class="logo">
    <img src={logo}></img>
  </label>
  <ul>
    <li><Link to="/" >Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/posts">Posts</Link></li>
    <li><Link to="/logout" onClick={logoutSubmit}>Logout</Link></li>
    <li><Link to="/user">User</Link></li>
    
  </ul>
</nav>
  </>
)
}
export default Header2;