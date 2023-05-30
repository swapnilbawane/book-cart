import { useAuth } from "../../context/auth-context";

export function UserDetails() { 

    const { userDetails} = useAuth(); 
    return(
        <> 
        <h1> {userDetails.firstName} </h1>
        <h1> {userDetails.lastName} </h1>
        <h1> {userDetails.email} </h1>
        </>
    ); 
}