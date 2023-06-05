import { useAuth } from "../../context/auth-context";
import { ProfileHeader } from "./ProfileHeader";
import "./User.css"; 

export function Address() { 

    const { userDetails} = useAuth(); 

    return(
        <> 
        <ProfileHeader /> 

        <div className="user-details"> 
        <p> <b className="strong"> Address </b>  </p>
      
        </div>
        </>
    ); 
}