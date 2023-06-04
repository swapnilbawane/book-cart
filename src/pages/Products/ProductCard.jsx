import { Link, useNavigate } from "react-router-dom"; 
import { useCart } from "../../context/cart-context";
import { useData } from "../../context/data-context";
import { useWishlist } from "../../context/wishlist-context";
import { useAuth } from "../../context/auth-context";

export function ProductCard({
    _id,
    title,
    author,
    price,
    categoryName,
    image,
    rating,
    singleProduct
}) { 

    const item = {_id,title,author,price,categoryName,image};
    
    const navigate = useNavigate(); 
    const { addToCart } = useCart(); 
    const { addToWishlist, deleteFromWishlist } = useWishlist();
    const { apiData } = useData(); 
    const { isLoggedIn } = useAuth(); 
    
    const isPresentInCart = Array.from(apiData?.cartData).findIndex((item)=>item._id === _id);
    const isPresentInWishlist = Array.from(apiData?.wishlistData).findIndex((item)=>item._id === _id);

    console.log("Product Card: Singleproduct true or false value: ONLY comes",singleProduct);
    
    return (
        <>
        {
        !singleProduct
        ? 
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
            <b> Ratings: {rating}/5 </b>
            </div>

            {  
            isPresentInCart === -1 
            ? <button className="card-button active-button" onClick={()=> isLoggedIn ? addToCart(item) : navigate("/login") }> Add to Cart</button>
            : <button className="card-button active-button" onClick={()=> navigate('/cart')}> Go to Cart</button>
            }
            
            
    </div>
        : 
        <div className="single-cont">

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
                <div> <h2> {title} </h2> </div>
                </div>

               
                
                
        </div>
    
       <div className="product-details">

        <div className="product-text"> 
        <h2> Title: {title} </h2>
        <h2> By: {author}  </h2> 
        <h2> Price: Rs. {price}  </h2> 
        <h2> Category: {categoryName}  </h2>  
        </div>
         
        <div className="product-addtocart">
               {  
                isPresentInCart === -1 
                ? <button className="card-button active-button" onClick={()=> isLoggedIn ? addToCart(item) : navigate("/login") }> Add to Cart</button>
                : <button className="card-button active-button" onClick={()=> navigate('/cart')}> Go to Cart</button>
                }   
        </div> 

        <div className="product-addtowishlist">
               {
                  isPresentInWishlist === -1 
                ? <button className="card-button active-button" onClick={()=> addToWishlist(item)}>Add to Wishlist </button>
                : <button className="card-button active-button" onClick={()=> deleteFromWishlist(_id)}>Remove from Wishlist </button>
                }  
        </div>   
                               
       </div>
        
        </div>
        }
       
        </>
    );
}

