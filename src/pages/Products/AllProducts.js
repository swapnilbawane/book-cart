import "./Products.css";
import { LoadingProducts } from "./LoadingProducts";
import { ProductCard } from "./ProductCard";
import { useData } from "../../context/data-context";

export function AllProducts() { 

const {apiData} = useData();

    return (
<> 

{/* condition start  */}

{ 
apiData?.product?.products 
? 
<div className="products">

{/* <!-- 1. product heads starts --> */}
        <div className="products-head">
            <h3> Showing All Products </h3>
            <span> (Showing {apiData.product.products.length ?? "..."} Products) </span>
        </div>
{/* <!-- 1. product heads ends --> */}

{/* <!-- 2. products items starts --> */}
<div className="products-items">
        {
           apiData?.product?.products?.map((item)=> {
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