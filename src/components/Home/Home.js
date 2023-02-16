import "./Home.css";
import Vectorleftlight from "../../images/Vectorleftlight.png";
import Vectorleftdark from "../../images/Vectorleftdark.png";
import homeright from "../../images/homeright.png";
import down from "../../images/down.png";
import Explore from "./ExplorePage";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUser } from "../../actions/userActions";
import { useEffect } from "react";
function Home()
{
    const dispatch=useDispatch();
    useEffect(()=>
    {
        dispatch(getUser());

    },[dispatch])
    return(
        <>
            <div className="HomeContainer">
            <div className="homehead">
                <h1>Earn Side Money</h1>
                </div>
                <div className="homeabout">Explore Ways To Earn</div>
                <div className="homearrow"><a href="#explore"><img src={down} className="arrowImg"></img></a></div>
             
            </div>
            <div className="vectorleft">
            <img src={Vectorleftlight} className="vectorleftlight"></img>
        <img src={Vectorleftdark} className="vectorleftdark"></img>
        </div>
        <img src={homeright} className="homeright"></img>
        <Explore />
        </>
    )

}
export default Home;