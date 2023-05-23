export function CheckoutComponent() { 
    return(
        <>
        <div className="cart-price-details-card">
    
    <h4> PRICE DETAILS </h4>

    <hr/>
    <div className="cart-price-flex">
    <p> Price (1 item) </p>
    <p> Rs 2000 </p>    
    </div>
    <div className="cart-price-flex">
    <p> Discount</p>
    <p> -Rs 1000 </p>    
    </div>
    <div className="cart-price-flex">
    <p> Delivery Charges</p>
    <p> Rs 499 </p>   
    </div>
    <hr/>
    <div className="cart-price-flex">
    <h4> TOTAL AMOUNT </h4> 
    <h4> Rs 2499 </h4>   
    </div>
    <hr/>
    <p>You will save Rs 1000 on this order </p>
    <button className="cart-card-button active-button"> Place Order</button>
</div>
        </>
    );
}