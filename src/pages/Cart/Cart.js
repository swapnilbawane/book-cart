import { Header } from "../../components/Header";
import "./Cart.css"; 


export function Cart() {
    return(
        <>
        <Header /> 
        
        <div class="cart-cont"> 

<h3> My Cart (1)</h3>

<div class="cart-items">

    <div class="cart-card-cont">
   
   <div class="cart-card-img">
   <img src="https://fastly.picsum.photos/id/807/200/200.jpg?hmac=Y8gayvNItiQYxP_Pd-2un9GH09XuyJdIZOQPw6K9QsI" alt="cards"/>
   </div>  

   <div class="cart-card-details-cont">

    <div class="cart-card-details">
    <h3> Men Premium Jacket </h3>

    <div>

    <div class="cart-card-price">
     <h2> Rs 2000 </h2>
     <h4> <s>Rs 3999 </s></h4>
    </div>
    
    <div class="cart-card-price">
        <h4>50% off</h4>
    </div>

    <p class="cart-cart-quantity-cont">
     Quantity:
     <div class="cart-card-quantity">
        <div>-</div>
        <input type="number" value="1"/>
        <div>+</div>
     </div>  
    </p>

    </div>   


    </div>

    <button class="cart-card-button"> Remove From Cart </button>  
    <button class="cart-card-wishlist"> Move To Wishlist </button>  
    
   </div>
    
</div>

    <div class="cart-price-details-card">
    
        <h4> PRICE DETAILS </h4>

        <hr/>
        <div class="cart-price-flex">
        <p> Price (1 item) </p>
        <p> Rs 2000 </p>    
        </div>
        <div class="cart-price-flex">
        <p> Discount</p>
        <p> -Rs 1000 </p>    
        </div>
        <div class="cart-price-flex">
        <p> Delivery Charges</p>
        <p> Rs 499 </p>   
        </div>
        <hr/>
        <div class="cart-price-flex">
        <h4> TOTAL AMOUNT </h4> 
        <h4> Rs 2499 </h4>   
        </div>
        <hr/>
        <p>You will save Rs 1000 on this order </p>
        <button class="cart-card-button active-button"> Place Order</button>
    </div>
</div>
</div>
        </>
    );

}