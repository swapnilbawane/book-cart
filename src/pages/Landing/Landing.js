import "./Landing.css"; 

import { useData } from "../../context/data-context";
import { useAuth } from "../../context/auth-context";
import { LoadingLanding } from "./LoadingLanding";
import { LandingComponent } from "./LandingComponent";
import { useErrorContextApp } from "../../context-APIErrorManagement/error-context";

import { LandingCategories } from "./LandingCategories";
import { Link } from "react-router-dom";


export function Landing() { 

    const {isLoggedIn} = useAuth();
    const {apiData} = useData(); 
    const { error } = useErrorContextApp(); 
    // console.log("apiData category length",apiData.category.length);
    // console.log("apiData categories length",apiData.category.categories.length);
   console.log("error from landing page", error);

return (
<> 

{

 error.category === ""
 ?  (apiData?.category?.categories ? <LandingComponent />  : <LoadingLanding />)
: <h1> {error.category} </h1>
}     


</> 
); 
}