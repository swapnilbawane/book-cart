import "./Landing.css"; 
import "./LandingCategories"; 

import { useData } from "../../context/data-context";
import { LandingCategories } from "./LandingCategories";
import { useAuth } from "../../context/auth-context";
import { Link } from "react-router-dom";

export function Landing() { 

    const {isLoggedIn} = useAuth();
  
    
    const {apiData} = useData(); 

    // console.log("apiData category length",apiData.category.length);
    // console.log("apiData categories length",apiData.category.categories.length);


return (
<> 
<h1> Landing app. </h1>
     
<div className="landing-comp"> 

<div className="landing-head"> 
    
{
apiData?.category?.categories 
?    
<div>
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
: <h1> Loading categories.. Please wait.. </h1>
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