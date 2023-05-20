import { Header } from "../../components/Header";
import "./Landing.css"; 



export function Landing() { 
    return (
        <> 
        <h1> Landing app. </h1>
        <Header /> 

    <div class="landing-comp"> 

    <div class="landing-head"> 

    <a href="/"> 
        <div class="landing-head-item"> 
        <div class="landing-item-label"> Men </div> 
        </div> 
    </a>

    <a href="/"> 
        <div class="landing-head-item"> 
        <div class="landing-item-label"> Men </div> 
        </div> 
    </a>

     <a href="/"> 
        <div class="landing-head-item"> 
        <div class="landing-item-label"> Men </div> 
        </div> 
    </a>

     <a href="/"> 
        <div class="landing-head-item"> 
        <div class="landing-item-label"> Men </div> 
        </div> 
    </a>


    </div>

    <div class="landing-sample-div"> 

    </div>
    
    <div class="landing-collection">

    <div class="landing-collection-item"> 
        <div class="blank-space"> </div>
        <div> 
        <p> NEW ARRIVALS </p> 
        <h3> Summer Collection </h3>  
        <p> Check out check out winter collection this collection </p>
        </div>
        </div>
    
    <div class="landing-collection-item"> 
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