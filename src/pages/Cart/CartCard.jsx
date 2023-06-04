import { useCart } from "../../context/cart-context";
import { useData } from "../../context/data-context";
import { useWishlist } from "../../context/wishlist-context";
import {useNavigate} from "react-router-dom";


export function CartCard({
_id,
title,
author,
price,
categoryName,
image,
qty    
}) {

const item = { _id,title,author,price,categoryName,image};

const navigate = useNavigate();
const { removeFromCart, incrementInCart, decrementInCart} = useCart();
const { addToWishlist } = useWishlist(); 
const { apiData } = useData(); 

const isPresentInWishlist = Array.from(apiData.wishlistData).findIndex((product)=> product._id === item._id);

const moveToWishlist = async (item) => { 
        
       if(isPresentInWishlist === -1 ) {
        addToWishlist(item);
        }

    }

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
        <div onClick={()=> decrementInCart(_id,qty)}>{qty>1 ? "-" : null}</div>
        <input type="number" value={qty} onChange={()=> console.log("Cart Card: qty updated")}/>
        <div onClick={()=> incrementInCart(_id,qty)}>+</div>
     </div>  
    </div>

    </div>   

    </div>

    <button 
    className="cart-card-button"
    onClick={()=> removeFromCart(_id)}
    > Remove From Cart </button> 

    { isPresentInWishlist<0 
    ?  <button className="cart-card-wishlist" onClick={()=> moveToWishlist(item)}> Move To Wishlist </button>
    :  <button className="cart-card-wishlist" onClick={()=> navigate('/wishlist')}> Go To Wishlist </button>
    }
    
   </div>
    
</div>
</>
);
}

