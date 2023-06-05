import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { useSearch } from "../../context/search-context";
import { ProductCard } from "../Products/ProductCard";
import { NoResultsSearch } from "./NoResultsSearch";
import '../Products/Products.css';
import "./Search.css";

export function Search() {

  const { searchResults } = useSearch(); 

    return(
        <>
        
           <Header />
           {
            searchResults.length>0 
            ?
            <div className="search-component">
           {
            searchResults.map((item,index)=> { 
                return (
                    <div key={item._id+index}>
                        <ProductCard {...item} /> 
                    </div>
                );
            })
           }
           </div>
           : 
           <NoResultsSearch />
           }
       </> 
    );
}