import "./Products.css";
import { LoadingProducts } from "./LoadingProducts";
import { ProductCard } from "./ProductCard";
import { useData } from "../../context/data-context";
import { useFilter } from "../../context/filter-context";
import { useEffect } from "react";



export function AllProducts2() { 

const {apiData} = useData();

const { filteredData, setFilteredData } = useFilter();

// console.log("from all products 2", apiData);
// console.log("filterData",filteredData);
// apiData?.product?.products 
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

<div className="products-head">
<h3> Showing All Products </h3>
<span> (Showing {filteredData.length ?? "..."} Products) </span>
</div>


{/* <!-- 2. products items starts --> */}
<div className="products-items">
        {
           filteredData?.map((item)=> {
            return(
                <div key={item._id}>
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