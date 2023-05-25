import { Link, useNavigate } from "react-router-dom"; 
import { useCart } from "../../context/cart-context";
import { useData } from "../../context/data-context";

export function ProductCard({
    _id,
    title,
    author,
    price,
    categoryName,
    image
}) { 

    const item = {_id,title,author,price,categoryName,image};
    
    // console.log("product card item value",item);
    // console.log("item", _id,title,author,price,categoryName);

    const {addToCart} = useCart(); 

    // TODO: logic if item present in cart, then button should be go to cart, else add to cart 
    // TODO: Logic if item added to wishlist then show full heart, use different classname? figure out logic? 

    const { apiData } = useData(); 

    const isPresentInCart = Array.from(apiData?.cartData).findIndex((item)=>item._id === _id);
    console.log("isPresent in cart:",isPresentInCart);

    const isPresentInWishlist = Array.from(apiData?.wishlistData).findIndex((item)=>item._id === _id);
    console.log("isPresent in wishlist:",isPresentInWishlist);

    

    const navigate = useNavigate(); 


    
    return (
        <>
        <div className="card-cont">
            <div className="card-img">
                <div className="card-badge">
                   
                {
                  isPresentInWishlist === -1   
                ? <i className="red-fav material-symbols-outlined">favorite</i>
                : <i className="red-fav material-symbols-outlined" id="red-fill">favorite</i>
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

