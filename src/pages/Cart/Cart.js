import { Header } from "../../components/Header";
import { useAuth } from "../../context/auth-context";
import "./Cart.css";
import { CartComponent } from "./CartComponent"; 
import { CheckoutComponent } from "./CheckoutComponent";

// TODO: Make this a protected route 
// TODO: Have a cart context, that has cart data, add to cart will use 

export function Cart() {
       
    return(
<>
<Header /> 
        
<div className="cart-cont"> 
<h3> My Cart (1)</h3>
<div className="cart-items">
<CartComponent /> 
<CheckoutComponent />    
</div>

</div>
</>
    );

}