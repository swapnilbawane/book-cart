import { Header } from "../../components/Header";
import { useAuth } from "../../context/auth-context";


export function UserProfile() { 

    const { userDetails } = useAuth(); 

    return(
        <> 
        <Header /> 
        <h1> {userDetails.firstName} </h1>
        <h1> {userDetails.lastName} </h1>
        <h1> {userDetails.email} </h1>

        </> 
    ); 
}