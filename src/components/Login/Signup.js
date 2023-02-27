import React,{Fragment, useEffect, useState} from "react";
import {Link, useParams } from 'react-router-dom';
import { useSelector,useDispatch } from "react-redux";
import { register } from "../../actions/userActions";
import loginImage from "../../images/login.png";
import signDark from "../../images/signdark.png";
import signLight from "../../images/signlight.png";


function Signup()
{const dispatch=useDispatch();
    const [email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[name,setName]=useState("");
    const[username,setUsername]=useState("");
    const{loading,isAuthenticated,user,error}=useSelector(state=>state.user)
    const registerSubmit=(e)=>
    {e.preventDefault();
        dispatch(register(email,password,name,username))
        if(error)
        {
            window.alert(error);
        }

  
    }
    useEffect(()=>
    {
        if(isAuthenticated)
        {
            window.alert("Successful");
            window.location.href=`/user`;
        }

    
        

    },[isAuthenticated])
    // return(
    //     <>
    //     <div class="signupForm">
    //     <h1>Log In With Email</h1>
    //         <form  onSubmit={registerSubmit} method="POST" action="/">
    //         <div className="loginDiv">
    //             <input className="loginInput" type="text" name="email" placeholder="Enter Your Email" 
    //             onChange={(e)=>setEmail(e.target.value)}></input>
    //             <input className="loginInput" type="password" name="password" placeholder="Enter Your Password"
    //             onChange={(e)=>setPassword(e.target.value)}></input>
    //              <input className="loginInput" type="text" name="name" placeholder="Enter Your Name"
    //             onChange={(e)=>setName(e.target.value)}></input>
    //              <input className="loginInput" type="text" name="username" placeholder="Enter Your Username"
    //             onChange={(e)=>setUsername(e.target.value)}></input>
    //             </div>
    //               <button type="submit" name="submit" className="logSubmit">SignUp</button>
                
    //         </form>
    //         <span>Already Have an Account? <Link to="/login">Login</Link></span>
    //         </div>
    //         <div className="signupImage">
    //         <img src={loginImage}></img>
    //         </div>
    //         <div className="signupVector">
    //         <img src={signLight} className="signupLight"></img>
    //         <img src={signDark} className="signupDark"></img>
            
    //         </div>
    //     </>
    // )
    return(
        <>
            <div class="loginContainer">
	<div class="screen">
		<div class="screen__content">
			<form class="signup" onSubmit={registerSubmit} method="POST" action="/login">
            <div class="login__field">
					<i class="login__icon fas fa-user"></i>
					<input type="text" class="signinput" placeholder="Enter Name"
                         onChange={(e)=>setName(e.target.value)}
                    />
				</div>
                <div class="login__field">
					<i class="login__icon fas fa-user"></i>
					<input type="text" class="signinput" placeholder="Enter Username"
                         onChange={(e)=>setUsername(e.target.value)}
                    />
				</div>
				<div class="login__field">
					<i class="login__icon fas fa-user"></i>
					<input type="text" class="signinput" placeholder="Enter Email"
                         onChange={(e)=>setEmail(e.target.value)}
                    />
				</div>
				<div class="login__field">
					<i class="login__icon fas fa-lock"></i>
					<input type="password" class="signinput" placeholder="Enter Password"
                         onChange={(e)=>setPassword(e.target.value)}
                    />
				</div>
				<button class="button login__submit">
					<span class="button__text">SignUp</span>
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
export default Signup;