import { useData } from "../../context/data-context";
import { useCart } from "../../context/cart-context";

export function CheckoutComponent() { 

  

  const { apiData } = useData(); 
  const { totalPrice, discount, deliveryCharges, totalQuantity} = useCart(); 

  console.log("cart:",apiData.cartData);
  // const cartInfo = apiData.cartData;
  // const totalPrice = cartInfo.reduce((acc,curr)=> acc+curr.price*curr.qty,0);
  // const discount = 10;
  // const deliveryCharges = 49; 

    return(
        <>
    
    { 
    apiData.cartData.length>0 && ( totalPrice-discount-deliveryCharges > 0) 
    ? <div className="cart-price-details-card">
    
     <h4> PRICE DETAILS </h4>
 
     <hr/>
     <div className="cart-price-flex">
     <p> Price ({totalQuantity} item) </p>
     <p> Rs {totalPrice} </p>    
     </div>
     <div className="cart-price-flex">
     <p> Discount</p>
     <p> -Rs {discount} </p>    
     </div>
     <div className="cart-price-flex">
     <p> Delivery Charges</p>
     <p> Rs {deliveryCharges} </p>   
     </div>
     <hr/>
     <div className="cart-price-flex">
     <h4> TOTAL AMOUNT </h4> 
     <h4> Rs {totalPrice-discount-deliveryCharges} </h4>   
     </div>
     <hr/>
     <p>You will save Rs {discount} on this order </p>
     <button className="cart-card-button active-button"> Place Order</button>
 </div>
   : <h1> Error adding to cart. Remove item from cart and try again. </h1>
    }
   


        </>
    );
}