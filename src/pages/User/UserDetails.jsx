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
        <h1> {userDetails.firstName} </h1>
        <h1> {userDetails.lastName} </h1>
        <h1> {userDetails.email} </h1>
        </div>
        </>
    ); 
}