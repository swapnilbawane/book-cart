import "./Landing.css"; 

import { useData } from "../../context/data-context";
import { useAuth } from "../../context/auth-context";
import { LoadingLanding } from "./LoadingLanding";
import { LandingComponent } from "./LandingComponent";
import { useErrorContextApp } from "../../context-APIErrorManagement/error-context";
import { ErrorPageLanding } from "./ErrorPageLanding";

export function Landing() { 

    const {isLoggedIn} = useAuth();
    const {apiData} = useData(); 
    const { error } = useErrorContextApp(); 
 

return (
<> 

{
error.category === ""
?  
(apiData?.category?.categories ? <LandingComponent />  : <LoadingLanding />)
: 
<ErrorPageLanding />
}     


</> 
); 
}