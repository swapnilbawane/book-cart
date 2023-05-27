import "./Landing.css"; 

import { useData } from "../../context/data-context";
import { useAuth } from "../../context/auth-context";
import { LoadingLanding } from "./LoadingLanding";
import { LandingComponent } from "./LandingComponent";

import { LandingCategories } from "./LandingCategories";
import { Link } from "react-router-dom";


export function Landing() { 

    const {isLoggedIn} = useAuth();
    const {apiData} = useData(); 
    // console.log("apiData category length",apiData.category.length);
    // console.log("apiData categories length",apiData.category.categories.length);


return (
<> 

{
 apiData?.category?.categories ? 
<LandingComponent />  : 
<LoadingLanding /> 
}     


</> 
); 
}