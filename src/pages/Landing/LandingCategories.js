import { Link } from "react-router-dom";

export function LandingCategories({
    _id,
    categoryName,
    description
}) { 

    return (
        <>
        <Link to="/products">
        <div className="landing-head-item">
        <div className="landing-item-label"> {categoryName} </div>
        </div>
        </Link>
        </>
    ); 
}