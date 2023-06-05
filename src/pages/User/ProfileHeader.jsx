import "./User.css"; 
import { Link } from "react-router-dom";

export function ProfileHeader() { 

    return (
        <> 
     <div className="profile-container">

        <div className="header-box">
        <span className="profile-header"> <Link to="/profile" > Profile Information </Link> </span>
        <span className="address-header" > <Link to="/address">  Addresses </Link> </span>
        </div>

    </div>
        </> 
    ); 
}