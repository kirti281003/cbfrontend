import "./Header.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
function Header() {
 return(
    <>
     <a className="navbar-brand" href="#">
        <img src={logo} className="logo"></img>
      </a>
        <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-color: #ebe4e4 nav-inline" >
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
     
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item me-5 ">
          <Link className=" nav-link head-link " aria-current="page" to="/">Home</Link>
        </li>
         <li className="nav-item me-5">
          <Link className=" nav-link head-link" to="/about">About</Link>
        </li>
        <li className="nav-item me-5">
          <Link className=" nav-link head-link" to="/login">Login</Link>
        </li>
        <li className="nav-item me-5">
          <Link className="nav-link head-link " to="/signup">SignUp</Link>
        </li> 
      </ul>
    </div>
  </div>
</nav>
    </>
 )
}

export default Header;