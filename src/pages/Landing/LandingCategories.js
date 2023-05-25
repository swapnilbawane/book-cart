import { useAuth } from "../../context/auth-context";

export function LandingCategories({
    _id,
    categoryName,
    description
}) { 

   const { handleHomeCategories } = useAuth();

    return (
        <>
        <a href="/products" onClick={handleHomeCategories}>
        <div className="landing-head-item">
        <div className="landing-item-label"> {categoryName} </div>
        </div>
        </a>
        </>
    ); 
}