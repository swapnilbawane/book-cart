import { Header } from "../../components/Header";
import { ProductCard } from "./ProductCard";
import { useData } from "../../context/data-context";
import "./Products.css"; 
import { LoadingProducts } from "./LoadingProducts";

export function Products() { 

    const {apiData} = useData(); 
    // console.log("apidata",apiData.product.products);

    return(
        <>
        <Header />

        <div className="pl-cont">
    
            <div className="filters">

                        {/* <!-- filter head starts --> */}
                        <div className="filter-head">
                                <b>Filters</b>
                                <span>Clear</span>
                        </div>
                        {/* <!-- filter head ends --> */}

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
                                                <input type="checkbox" />
                                                <label> Men Clothing</label>
                                            </div> 
                                            <div className="filter-category">
                                            <input type="checkbox" />
                                                <label> Men Clothing</label>
                                            </div> 
                                        </div> 

                                        </div>  
                                        {/* <!-- 2. Category over  --> */}
{/* 
                                                <!-- 3. rating and sort by start  --> */}
                                                <div>
                                                
                                                {/* <!-- 3a. Ratings start --> */}
                                                <h4>Rating</h4> 

                                                {/* <!-- 3a. Radios filter radio starts  --> */}
                                                <div className="filter-radio"> 
                                                    <div className="filter-category">
                                                        <input type="radio"/> <label>4 Stars & above </label>
                                                    </div>
                                                    <div className="filter-category">
                                                        <input type="radio"/> <label>3 Stars & above </label>
                                                    </div>
                                                    <div className="filter-category">
                                                        <input type="radio"/> <label>2 Stars & above </label>
                                                    </div>
                                                    <div className="filter-category">
                                                        <input type="radio"/> <label>1 Star & above </label>
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
                                                            <input type="radio"/>
                                                            <label> Price- Low to High </label>
                                                        </div>
                                                        <div className="filter-category">
                                                            <input type="radio"/>
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
            {/* <!-- filter over  --> */}
                        
    
                        {/* <!-- ***************************************************** --> */}
                        


                        {/* <!-- products start  --> */}
                         
                        { /// condition start 
                        apiData?.product?.products ? 
                        <div className="products">

                            
{/* <!-- 1. product heads starts --> */}
        <div className="products-head">
            <h3> Showing All Products </h3>
            <span> (Showing 20 Products) </span>
        </div>
{/* <!-- 1. prodcut heads ends --> */}

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
                        } // condition end 
                        
                        {/* <!-- products over  --> */}
                        
    {/* <!-- pl cont over  --> */}
    </div> 
        </>
    ); 
}