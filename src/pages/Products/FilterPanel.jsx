import "./Products.css"; 
import { useFilter } from "../../context/filter-context";
import { useData } from "../../context/data-context";
import { useEffect } from "react";

export function FilterPanel() { 

    const { apiData, filterInput, initialState, setFilterInput } = useData();
    const { setFilteredData, priceHandler, checkBoxHandler, ratingsHandler, sortHandler} = useFilter();

    const clearFilterData = () => { 
     
        setFilteredData(apiData.product.products);
        // setFilterInput(initialState);
    }

    // console.log("filterpanel filterinput",filterInput);
    



    return(
<> 

<div className="filters">


<div className="filter-head">
<b>Filters</b>
<span onClick={clearFilterData} className="clear">Clear</span>
</div>


{/* <!-- Filter main content starts --> */}
<div className="filter-content">

{/* <!--1. filter price start --> */}
<div className="filter-price">

<h4> Price </h4>

<div className="price-range-num">
<span>100</span>
<span>300</span>
<span>500</span>
</div>

<div className="filter-range-input">
<input 
type="range" 
list="tickmark" 
min="100" 
max="500" 
value={filterInput?.price}
step="50" 
onChange={priceHandler} 
className="filter-price-input" 
/>
</div>

</div>
{/* <!--1. filter price over  --> */}

{/* <!-- 2. Category start --> */}
<div>

<h4> Category </h4>

<div className="filter-radio">

<div className="filter-category">

<input 
type="checkbox"
value="fiction"
checked={filterInput?.fiction}
onChange={checkBoxHandler}
/>
<label> Fiction</label>
</div> 
                    
<div className="filter-category">
<input 
type="checkbox" 
value="non-fiction"
checked={filterInput?.nonfiction}
onChange={checkBoxHandler}
/>
<label> Non Fiction </label>
</div> 

<div className="filter-category">
<input 
type="checkbox"
value="fantasy"
checked={filterInput?.fantasy}
onChange={checkBoxHandler}
/>
<label> Fantasy </label>
</div> 

<div className="filter-category">
<input 
type="checkbox"
value="self-help"
checked={filterInput?.selfhelp}
onChange={checkBoxHandler}
/>
<label> Self-help </label>
</div> 

<div className="filter-category">
<input 
type="checkbox"
value="biography"
checked={filterInput?.biography}
onChange={checkBoxHandler}
/>
<label> Biography </label>
</div> 

</div> 

</div>  
{/* <!-- 2. Category over  --> */}

{/* <!-- 3. rating and sort by start  --> */}
<div>
                        
{/* <!-- 3a. Ratings start --> */}
<h4>Rating</h4> 

{/* <!-- 3a. Radios filter radio starts  --> */}
<div className="filter-radio"> 

<div className="filter-category">
<input 
type="radio"
name="ratings"
value="4"
checked={filterInput?.rating4}
onChange={ratingsHandler}
/> 
<label>4 Stars & above </label>
</div>

<div className="filter-category">
<input 
type="radio"
name="ratings"
value="3"
checked={filterInput?.rating3}
onChange={ratingsHandler}
/> 
<label>3 Stars & above </label>
</div>
                            
<div className="filter-category">
<input 
type="radio"
name="ratings"
value="2"
checked={filterInput?.rating2}
onChange={ratingsHandler}
/> 
<label>2 Stars & above </label>
</div>

<div className="filter-category">
<input 
type="radio"
name="ratings"
value="1"
checked={filterInput?.rating1}
onChange={ratingsHandler}
/> 
<label>1 Star & above </label>
</div> 
                            
</div> 
{/* <!-- 3a. filter radio over      --> */}
                        
{/* <!-- 3a. Ratings over --> */}


{/* <!-- 3b. Sort by start --> */}
<div>
<h4> Sort By</h4>

{/* <!-- Sort by filter radio starts --> */}
<div className="filter-radio"> 

<div className="filter-category">
<input 
type="radio"
value="lowtohigh"
name="sort"
checked={filterInput?.sortbylow}
onChange={sortHandler}
/>
<label> Price- Low to High </label>
</div>
                                
<div className="filter-category">
<input 
type="radio"
value="hightolow"
name="sort"
checked={filterInput?.sortbyhigh}
onChange={sortHandler}
/>
<label> Price- High to Low </label>
</div>    

</div>  
{/* <!-- Sort by filter radio over --> */}

</div> 
{/* <!-- 3b. Sort by over  --> */}


</div>   
{/* <!-- 3. rating and sort by over  --> */}

</div>
{/* <!-- Filter main content over  --> */}

</div> 
</> 
); 
}