import { useCart } from "../../context/cart-context";
import { useData } from "../../context/data-context";
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
   const {apiData} = useData(); 
   const { addToCart,incrementInCart } = useCart(); 

   const item = {_id,title,author,price,categoryName,image }; 

   const isPresent = apiData.cartData.findIndex((item)=> item._id===_id); 

   const addtoCartFromWishlist = () => { 
    if(isPresent===-1) { 
        addToCart(item);
    }
    else { 
        incrementInCart(_id); 
    }

   }

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

            <div className="button-container"> 
            <button className="card-button"
            onClick={()=> deleteFromWishlist(_id)}
            > Remove from wishlist </button>
      

        
             <button className="card-button active-button" onClick={()=> addtoCartFromWishlist()  }> Add to Cart</button>
         
           {/* <button className="card-button"
            onClick={()=> addtoCartFromWishlist(_id)}
            > Add to Cart </button> */}
        </div>
        </div>
        </>
    );
}