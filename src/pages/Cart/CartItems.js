export function CartItems() {
    return (
        <>
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
        </>
    ); 
}