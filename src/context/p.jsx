import { createContext, useContext, useEffect, useState } from "react";
import { useData } from "./data-context";

export const FilterContext = createContext(); 

export function FilterProvider({children}) {

    const { apiData } = useData(); 
    const [ originalData, setOriginalData] = useState([]);
    
    const [ filteredData, setFilteredData] = useState([]); 
    const [checkboxData, setCheckboxData] = useState([]); 
    
    
    const initialState = { 
       price: "100", 
       fiction: false,
       nonfiction: false,
       fantasy: false,
       selfhelp: false, 
       biography: false,
       rating4: false,
       rating3: false,
       rating2: false,
       rating1: false,
       sortbylow: false,
       sortbyhigh: false 
       }
    
    // state value that set the checked status of all inputs 
    const [ filterInput, setFilterInput ] = useState(initialState);
    
    const filterData = () => {

        // check price value and sort --> sort by initialstate.price 
        let totalFilterValue = []; 
        totalFilterValue = [...originalData].filter((item)=> item.price>=filterInput.price); 
        
        // check checkbox value and sort 
        if(checkboxData.length>0) 
        { 
        let checkboxFilter = []; 
        
        checkboxData?.forEach((item)=> { 
        const filterItems = totalFilterValue.filter((product)=> product.categoryName===item);
                    
        if(filterItems.length>0) { 
        checkboxFilter = [...checkboxFilter,...filterItems];
        }  
        });
            
        totalFilterValue = [...checkboxFilter]; 
        }
         
        // check rating value and sort 
         if(filterInput.rating4 || filterInput.rating3 || filterInput.rating2 || filterInput.rating1) 
         { 
         if(filterInput.rating4) { totalFilterValue = totalFilterValue.filter((item)=> item.rating >=4 ); }
         else if(filterInput.rating3) { totalFilterValue = totalFilterValue.filter((item)=> item.rating >=3 ); }
         else if(filterInput.rating2) { totalFilterValue = totalFilterValue.filter((item)=> item.rating >=2 ); }
         else if(filterInput.rating1 ) { totalFilterValue = totalFilterValue.filter((item)=> item.rating >=1 ); }
         }
          
        // check sort by value and sort 
        if(filterInput.sortbylow || filterInput.sortbyhigh) { 
        
        if(filterInput.sortbylow) { 
        const sortbylowValue = totalFilterValue.sort((a,b)=> a.price-b.price );
        totalFilterValue = [...sortbylowValue]; 
        }
        
        else if(filterInput.sortbyhigh) {
        const sortbyhighValue = totalFilterValue.sort((a,b)=> b.price-a.price ); 
        totalFilterValue = [...sortbyhighValue]; 
        }
        
        }
        
        
        if(totalFilterValue.length>0)
        {
        setFilteredData([...totalFilterValue]); 
        }
        
}
    
   const priceHandler= (event) => {
    const priceValue = event.target.value;
    setFilterInput({...filterInput, price: priceValue }) 
    }

    const checkBoxHandler = (event) => { 
        
        const checkboxValue = event.target.value; 
        console.log("cbvalue",checkboxValue);

        if(event.target.checked) {         
             switch(checkboxValue) {
             
             case "fiction": 
             setFilterInput({...filterInput, fiction: true });
             setCheckboxData([...checkboxData, checkboxValue]);  
             break; 
     
             case "non-fiction": 
             setFilterInput({...filterInput, nonfiction: true });
             setCheckboxData([...checkboxData, checkboxValue]);   
             break; 
             
             case "fantasy": 
             setFilterInput({...filterInput, fantasy: true });
             setCheckboxData([...checkboxData, checkboxValue]);   
             break;
              
             case "self-help": 
             setFilterInput({...filterInput, selfhelp: true });
             setCheckboxData([...checkboxData, checkboxValue]);   
             break; 

             case "biography": 
             setFilterInput({...filterInput, biography: true });
             setCheckboxData([...checkboxData, checkboxValue]);   
             break;  

             default: 
             console.log("default value of checked is true: checkbox handler");

             }
             
        }
        else { 
            switch(checkboxValue) {
             
             case "fiction": 
             setFilterInput({...filterInput, fiction: false });
             setCheckboxData([...checkboxData.filter((item)=> item!==checkboxValue)]);  
             break; 
     
             case "non-fiction": 
             setFilterInput({...filterInput, nonfiction: false });
             setCheckboxData([...checkboxData.filter((item)=> item!==checkboxValue)]);    
             break; 
             
             case "fantasy": 
             setFilterInput({...filterInput, fantasy: false });
             setCheckboxData([...checkboxData.filter((item)=> item!==checkboxValue)]);    
             break;
              
             case "self-help": 
             setFilterInput({...filterInput, selfhelp: false });
             setCheckboxData([...checkboxData.filter((item)=> item!==checkboxValue)]);    
             break; 

             case "biography": 
             setFilterInput({...filterInput, biography: false });
             setCheckboxData([...checkboxData.filter((item)=> item!==checkboxValue)]);    
             break;  

             default: 
             console.log("default value of checked is true: checkbox handler");

             }
        }
        
    }

    const ratingsHandler = (event) => { 
        const ratingsValue = event.target.value;

        switch(ratingsValue) { 
            case "4": 
            setFilterInput({...filterInput, rating4: true })  
            break;
       
            case "3": 
            setFilterInput({...filterInput, rating3: true }) 
            break;
            
            case "2": 
            setFilterInput({...filterInput, rating2: true }) 
            break;

            case "1": 
            setFilterInput({...filterInput, rating1: true }) 
            break;

            default:
            console.log("default value of checked is true: checkbox handler"); 
        }
    }

    const sortHandler = (event) => { 
        const radioValue = event.target.value;
        
        if(radioValue==="lowtohigh") {
            setFilterInput({...filterInput, sortbylow: true })  
             
        }

        else if(radioValue==="hightolow") { 
            setFilterInput({...filterInput, sortbyhigh: true }) 
        }
    }

    useEffect(()=> { 
        setOriginalData(apiData.product.products);
        filterData();
    },[filterInput,apiData]);

    return (
    
        <FilterContext.Provider value={{
            filteredData, 
            setFilteredData,
            checkboxData,  
            priceHandler,
            checkBoxHandler,
            ratingsHandler,
            sortHandler
            }}>

            {children}

        </FilterContext.Provider>

    ); 

}    

export const useFilter = () => useContext(FilterContext); 