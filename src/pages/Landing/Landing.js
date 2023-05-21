import "./Landing.css"; 
import { useData } from "../../context/data-context";


export function Landing() { 
    
    const apiData = useData(); 
    console.log("categories",apiData);

    return (
        <> 
        <h1> Landing app. </h1>
     

    <div className="landing-comp"> 

    <div className="landing-head"> 
    
    {  
    apiData?.products?.map((item) => { return (
<>    
<a href="/products">
<div className="landing-head-item">
<div className="landing-item-label"> {item.categoryName} </div>
</div>
</a>
</> 
);

})

}

    {/* <a href="/products"> 
        <div class="landing-head-item"> 
        <div class="landing-item-label"> Men </div> 
        </div> 
    </a>

    <a href="/products">
        <div class="landing-head-item"> 
        <div class="landing-item-label"> Men </div> 
        </div> 
    </a>

     <a href="/products">
        <div class="landing-head-item"> 
        <div class="landing-item-label"> Men </div> 
        </div> 
    </a>

     <a href="/products">
        <div class="landing-head-item"> 
        <div class="landing-item-label"> Men </div> 
        </div> 
    </a> */}


    </div>

    <div className="landing-sample-div"> 

    </div>
    
    <div className="landing-collection">

    <div className="landing-collection-item"> 
        <div class="blank-space"> </div>
        <div> 
        <p> NEW ARRIVALS </p> 
        <h3> Summer Collection </h3>  
        <p> Check out check out winter collection this collection </p>
        </div>
        </div>
    
    <div className="landing-collection-item"> 
            <div class="blank-space"> </div>
            <div> 
            <p> NEW ARRIVALS </p> 
            <h3> Summer Collection </h3>  
            <p> Check out check out winter collection this collection </p>
            </div>
            </div>
      
    </div>
   
    </div>

        </> 
    ); 
}