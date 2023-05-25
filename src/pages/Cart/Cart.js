import { Header } from "../../components/Header";
import { useAuth } from "../../context/auth-context";
import { useData } from "../../context/data-context";
import "./Cart.css";
import { CartComponent } from "./CartComponent"; 
import { CheckoutComponent } from "./CheckoutComponent";

// TODO: Make this a protected route 
// TODO: Have a cart context, that has cart data, add to cart will use 

export function Cart() {
     
const { apiData } = useData();     

    return(
<>
<Header /> 
        
<div className="cart-cont"> 
<h3> My Cart ({apiData.cartData.length>0 ? apiData.cartData.length : 0})</h3>
<div className="cart-items">
<CartComponent /> 
<CheckoutComponent />    
</div>

</div>
</>
    );

}