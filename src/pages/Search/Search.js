import { Header } from "../../components/Header";
import { useSearch } from "../../context/search-context";
import { ProductCard } from "../Products/ProductCard";
import '../Products/Products.css';

export function Search() {

  const { searchResults } = useSearch(); 

    return(
        <>
        
           <Header />
           <div>
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
       </> 
    );
}