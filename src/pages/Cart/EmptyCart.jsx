import { Link } from "react-router-dom";

export function EmptyCart() { 
    return(
        <h1> Your cart is empty. Explore our products <Link to="/products"> here </Link> </h1>
    ); 
}