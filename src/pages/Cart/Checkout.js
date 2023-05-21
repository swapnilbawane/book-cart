export function Checkout() { 
    return (
        <>
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
        </> 
    ); 
}