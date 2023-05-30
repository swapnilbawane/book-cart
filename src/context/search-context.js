import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router";
import { useData } from "./data-context";

export const SearchContext = createContext(); 

export function SearchProvider({children}) { 

    const navigate = useNavigate(); 
    const { apiData } = useData(); 

    const [ searchResults, setSearchResults] = useState([]); 

    const searchHandler = (event, search, setSearch) => { 
        navigate('/search'); 
        setSearch(event.target.value); 
        const results = apiData.product.products.filter((item)=> item.title.toLowerCase().includes(search.toLowerCase())); 
        setSearchResults(results); 
      }



    return(
        <SearchContext.Provider value={{searchResults, searchHandler}}>
            {children}
        </SearchContext.Provider>
    ); 

}

export const useSearch = () => useContext(SearchContext); 