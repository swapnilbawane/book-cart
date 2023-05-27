import { useData } from "../../context/data-context";
import { Link } from "react-router-dom";
import { LandingCategories } from "./LandingCategories";
import "./Landing.css"; 

export function LandingComponent() { 

    const {apiData} = useData(); 

    return (
        <>

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


