import "./Landing.css"; 
import "./LandingCategories"; 

import { useData } from "../../context/data-context";
import { LandingCategories } from "./LandingCategories";
import { useAuth } from "../../context/auth-context";
import { Link } from "react-router-dom";

export function Landing() { 

    const {isLoggedIn} = useAuth();
    console.log("landing check login value:", isLoggedIn);
    
    const apiData = useData(); 
    console.log("categories",apiData);

    return (
        <> 
<h1> Landing app. </h1>
     
<div className="landing-comp"> 

<div className="landing-head"> 
    
{  
apiData?.category?.categories?.map((item) => { return (
<div key={item._id}>    
<LandingCategories {...item} />
<Link to={"/category/"+item._id}> Explore </Link>
</div> 
);

})

}

    
    </div>

    <div className="landing-sample-div"> 

    </div>
    
    <div className="landing-collection">

    <div className="landing-collection-item"> 
        <div className="blank-space"> </div>
        <div> 
        <p> NEW ARRIVALS </p> 
        <h3> Best of Yuval Harari </h3>  
        <p> Check out critically acclaimed books from bestselling author </p>
        </div>
        </div>
    
    <div className="landing-collection-item"> 
            <div className="blank-space"> </div>
            <div> 
            <p> NEW ARRIVALS </p> 
            <h3> Ruskin Bond's Full Collection </h3>  
            <p> Cosy yourself with warmth of stories by Ruskin Bond. Entire set now available. </p>
            </div>
            </div>
      
    </div>
   
    </div>

        </> 
    ); 
}