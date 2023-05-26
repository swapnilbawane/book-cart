import { Header } from "../../components/Header";
import { useAuth } from "../../context/auth-context";
import { useCart } from "../../context/cart-context";
import { useData } from "../../context/data-context";
import "./Cart.css";
import { CartComponent } from "./CartComponent"; 
import { CheckoutComponent } from "./CheckoutComponent";

// TODO: Make this a protected route 
// TODO: Have a cart context, that has cart data, add to cart will use 

export function Cart() {
     
const { apiData } = useData(); 
const { totalQuantity }  = useCart();

    return(
<>
<Header /> 
        
<div className="cart-cont"> 
<h3> My Cart ({totalQuantity})</h3>
{/* apiData.cartData.length>0 ? apiData.cartData.length : 0 */}
<div className="cart-items">
{
apiData.cartData.length>0 
?     
<>
<CartComponent /> 
<CheckoutComponent />
</>
: 
<h1> Your cart is empty. </h1>
}    
</div>

</div>
</>
    );

}