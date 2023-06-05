import { useWishlist } from "../../context/wishlist-context";
import "./Wishlist.css";
import { Link } from "react-router-dom";

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

        <div className="card-cont-wishlist">
            <div className="card-img">
                {/* <div className="card-badge">
                <i className="red-fav material-symbols-outlined"> favorite </i>
                </div> */}
                <img src={image} alt="cards"/>
            </div>

            <div className="card-details-wishlist">
                <div> <Link to={`/product/`+_id}> {title} </Link> </div>
                <b> Rs. {price} </b>
            </div>

            
            <button className="card-button"
            onClick={()=> deleteFromWishlist(_id)}
            > Remove from wishlist </button>
        </div>
        </>
    );
}