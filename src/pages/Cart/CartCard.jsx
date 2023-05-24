

export function CartCard({
_id,
title,
author,
price,
categoryName,
image    
}) {

    const item = { _id,title,author,price,categoryName,image};

    return(
        <>
   <div className="cart-card-cont">
   
   <div className="cart-card-img">
   <img src={image} alt="cards"/>
   </div>  

   <div className="cart-card-details-cont">

    <div className="cart-card-details">
    <h3> {title} </h3>

    <div>

    <div className="cart-card-price">
     <h2> {price} </h2>
     <h4> <s>{author}{categoryName} </s></h4>
    </div>
    
    <div className="cart-card-price">
        <h4>50% off</h4>
    </div>

    <div className="cart-cart-quantity-cont">
     Quantity:
     <div className="cart-card-quantity">
        <div>-</div>
        <input type="number" value="1"/>
        <div>+</div>
     </div>  
    </div>

    </div>   


    </div>

    <button className="cart-card-button"> Remove From Cart </button>  
    <button className="cart-card-wishlist"> Move To Wishlist </button>  
    
   </div>
    
</div>
        </>
    );
}

// 36 43 