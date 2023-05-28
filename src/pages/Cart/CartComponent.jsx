import "./Cart.css";
import { useData } from "../../context/data-context";
import { CartCard } from "./CartCard";

export function CartComponent() {

   const {apiData} = useData(); 
   
   return(
    <div className="cart-component">
    
    { 
    apiData?.cartData?.map((item,index)=> { 
      return (
      <div key={item._id+index}>
                    <CartCard {...item} />
            </div> 
            ); 
    })
    }
   
    </div> 
   );  
}

