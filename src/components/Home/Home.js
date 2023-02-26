import "./Home.css";
import Vectorleftlight from "../../images/Vectorleftlight.png";
import Vectorleftdark from "../../images/Vectorleftdark.png";
import homeright from "../../images/homeright.png";
import homeleft from "../../images/homeleft.png";
import down from "../../images/down.png";
import Explore from "./ExplorePage";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../actions/userActions";
import { useEffect } from "react";
function Home()
{const{isAuthenticated}=useSelector(state=>state.user);
console.log(isAuthenticated);
    const dispatch=useDispatch();
    // useEffect(()=>
    // {
    //     dispatch(getUser());

    // },[dispatch])
    // return(
    //     <>
    //         {/* <div className="HomeContainer">
    //         <div className="homehead">
    //             <h1>Earn Side Money</h1>
    //             </div> */}
    //             {/* <div className="homeabout">Explore Ways To Earn</div>
    //             <div className="homearrow"><a href="#explore"><img src={down} className="arrowImg"></img></a></div> */}
             
    //         </div>
    //         {/* <div className="vectorleft">
    //         <img src={Vectorleftlight} className="vectorleftlight"></img>
    //     <img src={Vectorleftdark} className="vectorleftdark"></img>
    //     </div>
    //     <img src={homeright} className="homeright"></img>
    //     <Explore /> */}
    //     {/* <div className="right">
    //     <div className="rightdiv">Get Your Work Done
    //     <i class="button_icon fas fa-chevron-right"></i></div>
    //     <div className="rightdiv">Explore Opportunities
    //     <i class="button_icon fas fa-chevron-right"></i></div>
    //     </div>
    //     <img src={homeleft} className="homeleft"></img> */}

    //     </>
    // )
    return(
        <>
            <div className="HomeContainer">
           <div className="homehead">
                <h1>Earn Side Money</h1>
                <span className="homespan">
                We help you earn money,do projects by collaborating better with your peers who want their work done
              </span>
              </div>
              <img src={homeright} className="homeright"></img>
              <div className="aimlist">
              <div className="aim">	<div className="icon"><i class="buttonicon fas fa-handshake"></i></div>
              <div className="aimcontent">Hire People For Work</div></div>
              <div className="aim">	<div className="icon"><i class="buttonicon fas fa-briefcase"></i></div>
              <div className="aimcontent">Find Opportunities To Work</div></div>
              <div className="aim">	<div className="icon"><i class="buttonicon fas fa-money-bill-wave"></i></div>
              <div className="aimcontent">Get A Chance To Earn</div></div>
           
              </div>
              </div>
        </>
    )

}
export default Home;