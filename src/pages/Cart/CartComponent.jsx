import "./Cart.css";
import { useData } from "../../context/data-context";
import { CartCard } from "./CartCard";

export function CartComponent() {
    const {apiData} = useData(); 
   
    console.log("cart component apiData:", apiData)
    console.log("cart component cartData: ", apiData.cartData)
    console.log("cart component cart: ", apiData.cartData.cart)

   return(
    <div className="cart-component">
    
    { 
    apiData?.cartData?.map((item,index)=> { 
        return(
            <div key={item._id+index}>
                    <CartCard {...item} />
            </div>
        );
    })
    }
   
    </div> 
   );  
}