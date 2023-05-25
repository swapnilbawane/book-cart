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

        <div className="card-cont">
            <div className="card-img">
                <div className="card-badge">
                 <i className="red-fav material-symbols-outlined"> favorite </i>
                </div>
                <img src={image} alt="cards"/>
            </div>

            <div className="card-details">
                <div> {title} </div>
                <b> Rs. {price} </b>
            </div>

            <button className="card-button"> Add To Cart </button>
            <button 
            onClick={()=> deleteFromWishlist(_id)}
            > Remove from wishlist </button>
        </div>
        </>
    );
}