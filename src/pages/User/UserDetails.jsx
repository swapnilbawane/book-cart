import { useAuth } from "../../context/auth-context";
import "./User.css"; 
import { ProfileHeader } from "./ProfileHeader";

export function UserDetails() { 

    const { userDetails} = useAuth(); 
    return(
        <> 
        
        <ProfileHeader /> 
        <div className="user-details"> 
        <p> 
            <b className="strong"> First name: </b> 
            {userDetails.firstName}
        </p>  

        <p> 
        <b className="strong"> Last name: </b>
            {userDetails.lastName} 
        </p>


        <p> 
        <b className="strong"> Email id: </b>
            {userDetails.email} 
        </p>
        
        </div>
    
        </>
    ); 
}