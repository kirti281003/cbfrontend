import "./UserPage.css";
function UserPage({name,email,username})
{
    return(
        <>
        
        <div className="userpagecontainer">
            <h1>Hello {name}!!!<br></br>Welcome To Earn Side Money<br></br>An app developed by Celestial Biscuit IGDTUW that helps you
            earn through your talents as a side hustle besides your college studies.</h1>
        </div>

        <div className="profilename">
        <h4>Profile Details</h4>
        <h5>Name:-{name}</h5>
        <h5>Username:-{username}</h5>
        <h5>Email:-{email}</h5>
            
        </div>

        </>
    )
}
export default UserPage;