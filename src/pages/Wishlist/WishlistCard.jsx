import { useWishlist } from "../../context/wishlist-context";
import "./Wishlist.css";


export function WishlistCard({
    _id,
    title,
    author,
    price,
    categoryName,
    image 
}) { 

   const { deleteFromWishlist } = useWishlist(); 

    return(
        <>

        <div class="card-cont">
            <div class="card-img">
                <div class="card-badge">
                 <i class="red-fav material-symbols-outlined"> favorite </i>
                </div>
                <img src={image} alt="cards"/>
            </div>

            <div class="card-details">
                <div> {title} </div>
                <b> Rs. {price} </b>
            </div>

            <button class="card-button"> Add To Cart </button>
            <button 
            onClick={()=> deleteFromWishlist(_id)}
            > Remove from wishlist </button>
        </div>
        </>
    );
}