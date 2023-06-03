import { useAuth } from "../../context/auth-context";
import "./User.css"; 

export function UserDetails() { 

    const { userDetails} = useAuth(); 
    return(
        <> 
        <div>
        <span className="profile-header"> Profile Information </span>
        <span className="address-header"> Addresses </span>
        </div>

        <div className="user-details"> 
        <h1> Address </h1>
      
        </div>
        </>
    ); 
}