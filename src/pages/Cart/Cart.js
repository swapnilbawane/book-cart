import { Header } from "../../components/Header";
import { Checkout } from "./Checkout";
import { CartItems } from "./CartItems";
import "./Cart.css"; 


export function Cart() {
    return(
<>

<Header /> 
        
<div class="cart-cont"> 

<h3> My Cart (1)</h3>

<div class="cart-items">
<CartItems /> 
<Checkout />
</div> 

</div>

</>
    );

}