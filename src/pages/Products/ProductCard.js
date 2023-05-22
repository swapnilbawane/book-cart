import { Link } from "react-router-dom"; 

export function ProductCard({
    _id,
    title,
    author,
    price,
    categoryName,
    image
}) { 

    console.log("item", _id,title,author,price,categoryName);

    // TODO: logic if item present in cart, then button should be go to cart, else add to cart 
    // TODO: Logic if item added to wishlist then show full heart, use different classname? figure out logic? 
    return (
        <>
        <div className="card-cont">
            <div className="card-img">
                <div className="card-badge">
                <i className="red-fav material-symbols-outlined">favorite</i>  
                </div> 
                <img src={image} alt="testimg" />   
                </div>

                <div className="card-details">
                <div> <Link to={`/product/`+_id}> {title} </Link> </div>
                <b> Rs.{price} </b>
                </div>

                <button className="card-button active-button"> Add to Cart</button>
        </div>
        </>
    );
}

