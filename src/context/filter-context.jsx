import { createContext, useContext, useEffect, useState } from "react";
import { useData } from "./data-context";

export const FilterContext = createContext(); 

export function FilterProvider({children}) {

    const { apiData, filterInput, setFilterInput, originalData, initialState} = useData(); 
   
    console.log("Filter Context: filter API Data at start of function: ",apiData);

 
    const [ filteredData, setFilteredData] = useState([]); 
    // const [checkboxData, setCheckboxData] = useState([]); 
    
    
    // state value that set the checked status of all inputs 
    
    // console.log("Filter Context: filterinput data at start of function",filterInput);
    
    const filterData = () => {

        // console.log("Filter Context: Entered filterData function..")
        // console.log("Filter Context: original data from filterdata function",originalData);

        // check price value and sort --> sort by initialstate.price 
        let totalFilterValue = apiData?.product?.products || []; 

        // console.log("price value:",totalFilterValue); 

        totalFilterValue = totalFilterValue.filter((item)=> Number(item.price)>=Number(filterInput?.price)); 

        // console.log("Filter Context: Applied price filter: totalFilterValue data from filterdata function",totalFilterValue);
        // console.log("before checkbox:",totalFilterValue);
        // check checkbox value and sort 

        if(filterInput.checkboxData.length>0) 
        { 
        let checkboxFilter = []; 
        
        filterInput?.checkboxData?.forEach((item)=> { 
        const filterItems = totalFilterValue.filter((product)=> product.categoryName===item);
                    
        if(filterItems.length>0) { 
        checkboxFilter = [...checkboxFilter,...filterItems];
        }

        });
            

        totalFilterValue = [...checkboxFilter]; 
        }
       
        // console.log("after checkbox:",totalFilterValue);
         
        // check rating value and sort 
         if(filterInput.rating4 || filterInput.rating3 || filterInput.rating2 || filterInput.rating1) 
         { 
         if(filterInput.rating4) { 
        totalFilterValue = totalFilterValue.sort((a,b)=> b.rating-a.rating);
        totalFilterValue = totalFilterValue.filter((item)=> item.rating >=4 ); 
        }
         else if(filterInput.rating3) { 
            totalFilterValue = totalFilterValue.sort((a,b)=> b.rating-a.rating); 
            totalFilterValue = totalFilterValue.filter((item)=> item.rating >=3 ); 
        }
         else if(filterInput.rating2) { 
            totalFilterValue = totalFilterValue.sort((a,b)=> b.rating-a.rating);
            totalFilterValue = totalFilterValue.filter((item)=> item.rating >=2 ); 
        }
         else if(filterInput.rating1 ) { 
            totalFilterValue = totalFilterValue.sort((a,b)=> b.rating-a.rating);
            totalFilterValue = totalFilterValue.filter((item)=> item.rating >=1 ); 
        }
         }

         console.log("Filter Context: Applied rating filter: totalFilterValue data from filterdata function",totalFilterValue);
          
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
        console.log("last data:",totalFilterValue)
        setFilteredData([...totalFilterValue]); 
        }
        else { console.log("Filter Context: Reached empty filtered data length section. At the end of filterData function.")}
        
}
    
   const priceHandler= (event) => {
    const priceValue = event.target.value;
    setFilterInput({...filterInput, price: priceValue }) 
    }

    const checkBoxHandler = (event) => { 
        
        const checkboxValue = event.target.value;
        const checkedValue = event.target.checked;

        console.log("event checked", checkedValue, checkboxValue);

            if(event.target.checked) { 
                switch(checkboxValue) {
                    case "fiction":
                            setFilterInput({...filterInput, fiction: true, checkboxData: [...filterInput.checkboxData,checkboxValue] });
                    break; 
            
                    case "non-fiction": 
                        setFilterInput({...filterInput, nonfiction: true, checkboxData: [...filterInput.checkboxData,checkboxValue] });
                    break; 
                    
                    case "fantasy":
                    setFilterInput({...filterInput, fantasy: true, checkboxData: [...filterInput.checkboxData,checkboxValue] });
                    break;
                     
                    case "self-help":
                    setFilterInput({...filterInput, selfhelp: true, checkboxData: [...filterInput.checkboxData,checkboxValue] });
                    break; 
            
                    case "biography": 
                    setFilterInput({...filterInput, biography: true, checkboxData: [...filterInput.checkboxData,checkboxValue] });
                    break;  
            
                    default: 
                    console.log("Filter Context: Checkbox handler reached the end: Default value of checked is true. ");
            
                    }
            } // if 

            else { 
                switch(checkboxValue) 
                { 
                    case "fiction":
                            setFilterInput({...filterInput, fiction: false, checkboxData: [...filterInput.checkboxData.filter((item)=> item!==checkboxValue)]  });
                    break; 
            
                    case "non-fiction": 
                    setFilterInput({...filterInput, nonfiction: false, checkboxData: [...filterInput.checkboxData.filter((item)=> item!==checkboxValue)] });
                    break; 
                    
                    case "fantasy":
                            setFilterInput({...filterInput, fantasy: false, checkboxData: [...filterInput.checkboxData.filter((item)=> item!==checkboxValue)] });
                    break;
                     
                    case "self-help":
                            setFilterInput({...filterInput, selfhelp: false, checkboxData: [...filterInput.checkboxData.filter((item)=> item!==checkboxValue)] });          
                    break; 
            
                    case "biography": 
                        setFilterInput({...filterInput, biography: false, checkboxData: [...filterInput.checkboxData.filter((item)=> item!==checkboxValue)] });
                    break;  
            
                    default: 
                    console.log("Filter Context: Checkbox handler reached the end: Default value of checked is true. ");
                }
        } // else 

     
   }

    const ratingsHandler = (event) => { 
        const ratingsValue = event.target.value;
       
        // console.log("checkedvalue",event.target.checked);

        switch(ratingsValue) { 
            case "4":   
            setFilterInput({...filterInput, 
                rating4: true,
                rating3: false,
                rating2: false,
                rating1: false   });  
            break;
       
            case "3": 
            setFilterInput({...filterInput, 
                rating4: false,
                rating3: true,
                rating2: false,
                rating1: false   }); 
            break;
            
            case "2": 
            setFilterInput({...filterInput, 
                rating4: false,
                rating3: false,
                rating2: true,
                rating1: false   }); 
            break;

            case "1": 
            setFilterInput({...filterInput, 
                rating4: false,
                rating3: false,
                rating2: false,
                rating1: true }); 
            break;

            default:
            console.log("Filter Context: checkboxhandler : default area reached."); 
        }
    }

    const sortHandler = (event) => { 
        const radioValue = event.target.value;
        
        if(radioValue==="lowtohigh") {
            setFilterInput({...filterInput, 
                sortbylow: true, 
                sortbyhigh:false 
            })        
        }

        else if(radioValue==="hightolow") { 
            setFilterInput({...filterInput, 
                sortbyhigh: true, 
                sortbylow: false 
            }) 
        }
    }

    const clearFilterData = () => { 
        
        setFilterInput(initialState);
        // setCheckboxData([]);
        // const setToOriginalData = [...apiData.product.products];
        // console.log("Filter Context: setToOriginalData at start of clearFilterData function: ",setToOriginalData);

      // console.log("Filter Context: setToOriginalData at end of clearFilterData function: ");
      // setFilteredData(setToOriginalData);
       
    }

    useEffect(()=> { 
        filterData();
    },[filterInput]);

    return (
    
        <FilterContext.Provider value={{
            filteredData,
            setFilteredData, 
            priceHandler,
            checkBoxHandler,
            ratingsHandler,
            sortHandler,
            clearFilterData
            }}>

            {children}

        </FilterContext.Provider>

    ); 

}    

export const useFilter = () => useContext(FilterContext); 