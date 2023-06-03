import "./Products.css";
import { LoadingProducts } from "./LoadingProducts";
import { ProductCard } from "./ProductCard";
import { useData } from "../../context/data-context";
import { useEffect } from "react";
import { useFilter } from "../../context/filter-context";



export function AllProducts() { 

const {apiData} = useData();

const { filteredData, setFilteredData } = useFilter();

useEffect(()=> { 
    setFilteredData(apiData.product.products)
    },[apiData]);


return (
<> 

{/* condition start  */}

{ 
filteredData
? 
<div className="products">

{/* <!-- 1. product heads starts --> */}
        <div className="products-head">
            <h3> Showing All Products </h3>
            <span> (Showing {filteredData.length ?? "..."} Products) </span>
        </div>
{/* <!-- 1. product heads ends --> */}

{/* <!-- 2. products items starts --> */}
<div className="products-items">
        {
           filteredData.map((item,index)=> {
            return(
                <div key={item._id+index}>
                    <ProductCard {...item} /> 
                </div>
            );
           })             

        }          
</div>
{/* <!-- 2. products items ends  --> */}

</div>

: <LoadingProducts />
}  

{/* condition ends */}

</>
);

}