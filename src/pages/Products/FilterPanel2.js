import "./Products.css"; 
import { useFilter } from "../../context/filter-context";
import { useData } from "../../context/data-context";

export function FilterPanel2() { 

const { apiData } = useData(); 
const { filteredData, setFilteredData, radioHandler, starsHandler, checkboxData, checkBoxHandler} = useFilter(); 

console.log("checkbox data", checkboxData); 

const clearFilterData = () => { 
    setFilteredData(apiData.product.products)
}

return(
<> 

<div className="filters">


<div className="filter-head">
<b>Filters</b>
<span onClick={clearFilterData}>Clear</span>
</div>


{/* <!-- Filter main content starts --> */}
<div className="filter-content">

{/* <!--1. filter price start --> */}
<div className="filter-price">

<h4> Price </h4>

<div className="price-range-num">
<span>50</span>
<span>150</span>
<span>200</span>
</div>

<div className="filter-range-input">
<input type="range" list="tickmark" min="300" max="3100" step="200" className="filter-price-input" />
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
onChange={(event)=> checkBoxHandler(event,apiData.product.products)}
/>
<label> Fiction </label>
</div> 
                    
<div className="filter-category">
<input 
type="checkbox"
value="non-fiction"
onChange={(event)=> checkBoxHandler(event,apiData.product.products)}
/>
<label> Non Fiction </label>
</div> 

<div className="filter-category">
<input 
type="checkbox" 
value="self-help"
onChange={(event)=> checkBoxHandler(event,apiData.product.products)}
/>
<label> Self Help </label>
</div> 

<div className="filter-category">
<input 
type="checkbox"
value="fantasy"
onChange={(event)=> checkBoxHandler(event,apiData.product.products)}
/>
<label> Fantasy </label>
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
name="rating"
value="4"
onChange={(event) => starsHandler(event, apiData.product.products)}
/> <label>4 Stars & above </label>
</div>

<div className="filter-category">
<input 
type="radio"
name="rating"
value="3"
onChange={(event) => starsHandler(event, apiData.product.products)}
/> <label>3 Stars & above </label>
</div>
                            
<div className="filter-category">
<input 
type="radio"
name="rating"
value="2"
onChange={(event) => starsHandler(event, apiData.product.products)}
/> <label>2 Stars & above </label>
</div>

<div className="filter-category">
<input type="radio"
name="rating"
value="1"
onChange={(event) => starsHandler(event, apiData.product.products)}
/> <label>1 Star & above </label>
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
onChange={radioHandler}
name="price"
/>
<label> Price- Low to High </label>
</div>
                                
<div className="filter-category">
<input 
type="radio"
value="hightolow"
onChange={radioHandler}
name="price"
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