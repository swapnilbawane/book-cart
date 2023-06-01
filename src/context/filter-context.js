import { createContext, useContext, useState } from "react";

export const FilterContext = createContext(); 

export function FilterProvider({children}) {
    
   
    const [ filteredData, setFilteredData] = useState([]); 

    const radioHandler = (event) => { 
        const radioValue = event.target.value;
        console.log("radioValue",radioValue);

        if(radioValue==="lowtohigh") { 
            const lowData = filteredData.sort((a,b)=> Number(a.price)-Number(b.price));
            setFilteredData([...lowData]); 
        }

        else if(radioValue==="hightolow") { 
            const highData = filteredData.sort((a,b)=> Number(b.price)-Number(a.price));
            setFilteredData([...highData]); 
        }
    }

    const starsHandler = (event, data) => { 
        const starsValue = event.target.value;
        console.log("data",data); 

        switch(starsValue) { 
            case "4": 
            const starfour = data.filter((item)=> item.stars>=4);
            setFilteredData([...starfour]);
            break;
       
            case "3": 
            const starthree = data.filter((item)=> item.stars>=3);
            setFilteredData([...starthree]);
            break;
            
            case "2": 
            const startwo = data.filter((item)=> item.stars>=2);
            setFilteredData([...startwo]);
            break;

            case "1": 
            const starone = data.filter((item)=> item.stars>=1);
            setFilteredData([...starone]);
            break;

            default:
            console.log("hello default"); 

        }
    }
   
    return (
    
        <FilterContext.Provider value={{filteredData, setFilteredData, radioHandler, starsHandler}}>
            {children}
        </FilterContext.Provider>

    ); 
}

export const useFilter = () => useContext(FilterContext); 
