import { Link, useNavigate } from "react-router-dom"; 
import { useCart } from "../../context/cart-context";
import { useData } from "../../context/data-context";
import { useWishlist } from "../../context/wishlist-context";

export function ProductCard({
    _id,
    title,
    author,
    price,
    categoryName,
    image
}) { 

    const item = {_id,title,author,price,categoryName,image};
    
    const navigate = useNavigate(); 
    const { addToCart } = useCart(); 
    const { addToWishlist, deleteFromWishlist } = useWishlist();
    const { apiData } = useData(); 
    
    const isPresentInCart = Array.from(apiData?.cartData).findIndex((item)=>item._id === _id);
    const isPresentInWishlist = Array.from(apiData?.wishlistData).findIndex((item)=>item._id === _id);
    
    return (
        <>
        <div className="card-cont">
            <div className="card-img">
                <div className="card-badge">
                   
                {
                  isPresentInWishlist === -1 
                ? <i className="material-symbols-outlined" onClick={()=> addToWishlist(item)}>favorite</i>
                : <i className="material-symbols-outlined" id="red-fill" onClick={()=> deleteFromWishlist(_id)}>favorite</i>
                }  
                </div> 
                <img src={image} alt="testimg" />   
                </div>

                <div className="card-details">
                <div> <Link to={`/product/`+_id}> {title} </Link> </div>
                <b> Rs.{price} </b>
                </div>

                { isPresentInCart === -1 
                ? <button className="card-button active-button" onClick={()=> addToCart(item)}> Add to Cart</button>
                : <button className="card-button active-button" onClick={()=> navigate('/cart')}> Go to Cart</button>
                }
        </div>
        </>
    );
}

