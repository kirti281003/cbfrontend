import React,{Fragment, useEffect, useState} from "react";
import { Link, useParams } from 'react-router-dom';
import { useSelector,useDispatch } from "react-redux";
import { getUser, login } from "../../actions/userActions";
import loginImage from "../../images/login.png";
import  "./Login.css";
import User from "../User/User";


function Login()
{const dispatch=useDispatch();
    const [email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const{loading,isAuthenticated,user,error}=useSelector(state=>state.user)
    const loginSubmit=(e)=>
    {e.preventDefault();
        dispatch(login(email,password))
        if(error)
        {
            window.alert(error);
        }
  
    }
    useEffect(()=>
    {
        if(isAuthenticated)
        {  window.location.href=`/user/${user.username}`;
        
           
        }  

    },[isAuthenticated,error,dispatch])
    // return(
    //     <><div className="loginForm">
    //     <h1>Sign In With Email</h1>
    //         <form onSubmit={loginSubmit} method="POST" action="/login">
    //         <div className="loginDiv">
        
    //             <input  type="text" name="email" className="loginInput" placeholder="Enter Your Email" 
    //             onChange={(e)=>setEmail(e.target.value)}></input>
    //             </div>
           
              
    //             <input  type="password" name="password" className="loginInput" placeholder="Enter Your Password"
    //             onChange={(e)=>setPassword(e.target.value)}></input>
                
    //             <div >
    //             <button type="submit" name="submit" className="logSubmit">Login</button>
    //             </div>
    //         </form>
    //         <span>Create An Account <Link to="/signup">SignUp</Link></span>
    //     </div>
    //     <div className="loginImage">
    //         <img src={loginImage}></img>
    //     </div>

    //     </>
    // )
    return(
        <>
            <div class="loginContainer">
	<div class="screen">
		<div class="screen__content">
			<form class="login" onSubmit={loginSubmit} method="POST" action="/login">
				<div class="login__field">
					<i class="login__icon fas fa-user"></i>
					<input type="text" class="logininput" placeholder="Enter Email"
                         onChange={(e)=>setEmail(e.target.value)}
                    />
				</div>
				<div class="login__field">
					<i class="login__icon fas fa-lock"></i>
					<input type="password" class="logininput" placeholder="Enter Password"
                         onChange={(e)=>setPassword(e.target.value)}
                    />
				</div>
				<button class="button login__submit">
					<span class="button__text">Login</span>
					<i class="button__icon fas fa-chevron-right"></i>
				</button>				
			</form>
			{/* <div class="social-login">
				<h3><a href="kayıtol.php">Kayıt ol</a></h3>
				
				<h3><a href="sifremiunuttum.php">Şifremi Unuttum</a></h3>
				<div class="social-icons">
					<a href="https://instagram.com/isikabatay06" class="social-login__icon fab fa-instagram"></a>
					<a href="#" class="social-login__icon fab fa-facebook"></a>
					<a href="https://twitter.com/isikabatay06" class="social-login__icon fab fa-twitter"></a>
				</div>
			</div> */}
		</div>
		<div class="screen__background">
			<span class="screen__background__shape screen__background__shape4"></span>
			<span class="screen__background__shape screen__background__shape3"></span>		
			<span class="screen__background__shape screen__background__shape2"></span>
			<span class="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
</div>
        </>
    )
}
export default Login;