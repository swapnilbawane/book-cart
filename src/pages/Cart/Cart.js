import { Header } from "../../components/Header";
import { useCart } from "../../context/cart-context";
import { useData } from "../../context/data-context";
import "./Cart.css";
import { CartComponent } from "./CartComponent"; 
import { CheckoutComponent } from "./CheckoutComponent";
import { LoadingCart } from "./LoadingCart";
import { EmptyCart } from "./EmptyCart";
import { useErrorContextApp } from "../../context-APIErrorManagement/error-context";
import { ErrorPageCart } from "./ErrorPageCart";

// TODO: Make this a protected route 
// TODO: Have a cart context, that has cart data, add to cart will use 

export function Cart() {
     
const { apiData } = useData(); 
const { totalQuantity }  = useCart();
const { error } = useErrorContextApp(); 

return(
<>
<Header /> 
        
{
error.cart === "" 
? 
<div className="cart-cont"> 
{
apiData.cartData 
? 
<>
<h3> My Cart ({totalQuantity})</h3>

<div className="cart-items">
{
apiData.cartData.length>0 
?     
<>
<CartComponent /> 
<CheckoutComponent />
</>
: 
<EmptyCart />
}    
</div>

</> 
: 
<LoadingCart /> 
}
</div>
: 
<ErrorPageCart /> 
}



</>

);

}