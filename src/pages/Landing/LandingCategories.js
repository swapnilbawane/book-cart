export function LandingCategories({
    _id,
    categoryName,
    description
}) { 
    return (
        <>
        <a href="/products">
        <div className="landing-head-item">
        <div className="landing-item-label"> {categoryName} </div>
        </div>
        </a>
        </>
    ); 
}