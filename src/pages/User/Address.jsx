import { useAuth } from "../../context/auth-context";
import { ProfileHeader } from "./ProfileHeader";
import "./User.css"; 

export function Address() { 

    const { userDetails} = useAuth(); 

    return(
        <> 
        <ProfileHeader /> 

        <div className="user-details"> 
        <h1> Address </h1>
      
        </div>
        </>
    ); 
}