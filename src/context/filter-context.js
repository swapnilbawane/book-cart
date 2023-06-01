import { createContext, useContext, useState } from "react";

export const FilterContext = createContext(); 

export function FilterProvider({children}) {
    
   
    const [ filteredData, setFilteredData] = useState([]); 

    const radioHandler = (event) => { 
        const radioValue = event.target.value;
        console.log("radioValue",radioValue);

        if(radioValue==="lowtohigh") { 
            console.log("filter low data", filteredData);
            const lowData = filteredData.sort((a,b)=> Number(a.price)-Number(b.price));
            console.log(lowData);
            setFilteredData([...lowData]); 
        }

        else if(radioValue==="hightolow") { 
            const highData = filteredData.sort((a,b)=> Number(b.price)-Number(a.price));
            console.log("high", highData);
            setFilteredData([...highData]); 
        }
    }
   
    return (
    
        <FilterContext.Provider value={{filteredData, setFilteredData, radioHandler}}>
            {children}
        </FilterContext.Provider>

    ); 
}

export const useFilter = () => useContext(FilterContext); 
