import { Link } from "react-router-dom";
import { useFilter } from "../../context/filter-context";

export function LandingCategories({
    _id,
    categoryName,
    description
}) { 

    const { checkBoxCategoryHandler } = useFilter(); 

    return (

        <>
        <Link to="/products">
        <div className="landing-head-item">
        <div className="landing-item-label">  <Link to='/products' onClick={()=> checkBoxCategoryHandler(categoryName)}> {categoryName}</Link> </div>
        </div>
        </Link>
        </>
    ); 
}