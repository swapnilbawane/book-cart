import { Link } from "react-router-dom";

export function NoResultsSearch() { 
    return(
        <>
         <h1> No results found. Search other terms or 
         checkout all products <Link to="/products"> here </Link>
         </h1> 
        </>
    );
}