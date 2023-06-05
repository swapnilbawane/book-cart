import { Link } from "react-router-dom";

export function EmptyWishlist() { 
    return(
        <h1> Your wishlist is empty. Explore our products <Link to="/products"> here </Link> </h1> 
    );
}