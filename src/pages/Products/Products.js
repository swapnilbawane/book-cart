import { Header } from "../../components/Header";
import "./Products.css"; 

export function Products() { 
    return(
        <>
        <Header />

        <div class="pl-cont">
    
            <div class="filters">

                        {/* <!-- filter head starts --> */}
                        <div class="filter-head">
                                <b>Filters</b>
                                <span>Clear</span>
                        </div>
                        {/* <!-- filter head ends --> */}

                        {/* <!-- Filter main content starts --> */}
                        <div class="filter-content">

                                {/* <!--1. filter price start --> */}
                                <div class="filter-price">
                                        <h4> Price </h4>
                                        <div class="price-range-num">
                                            <span>50</span>
                                            <span>150</span>
                                            <span>200</span>
                                        </div>
                                        <div class="filter-range-input">
                                            <input type="range" list="tickmark" min="300" max="3100" step="200" class="filter-price-input" />
                                        </div>
                                </div>
                                {/* <!--1. filter price over  --> */}
           
                                        {/* <!-- 2. Category start --> */}
                                        <div>
                                        <h4> Category </h4>

                                        <div class="filter-radio">
                                            <div class="filter-category">
                                                <input type="checkbox" />
                                                <label> Men Clothing</label>
                                            </div> 
                                            <div class="filter-category">
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
                                                <div class="filter-radio"> 
                                                    <div class="filter-category">
                                                        <input type="radio"/> <label>4 Stars & above </label>
                                                    </div>
                                                    <div class="filter-category">
                                                        <input type="radio"/> <label>3 Stars & above </label>
                                                    </div>
                                                    <div class="filter-category">
                                                        <input type="radio"/> <label>2 Stars & above </label>
                                                    </div>
                                                    <div class="filter-category">
                                                        <input type="radio"/> <label>1 Star & above </label>
                                                    </div> 
                                                    
                                                </div> 
                                                {/* <!-- 3a. filter radio over      --> */}
                                                
                                                {/* <!-- 3a. Ratings over --> */}

                                                {/* <!-- 3b. Sort by start --> */}
                                                <div>
                                                    <h4> Sort By</h4>

                                                    {/* <!-- Sort by filter radio starts --> */}
                                                    <div class="filter-radio"> 
                                                        <div class="filter-category">
                                                            <input type="radio"/>
                                                            <label> Price- Low to High </label>
                                                        </div>
                                                        <div class="filter-category">
                                                            <input type="radio" checked />
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
                        <div class="products">
                                    {/* <!-- 1. product heads starts --> */}
                                            <div class="products-head">
                                                <h3> Showing All Products </h3>
                                                <span> (Showing 20 Products) </span>
                                            </div>
                                    {/* <!-- 1. prodcut heads ends --> */}

                                    {/* <!-- 2. products items starts --> */}

                                            <div class="products-items">
                                               {/* <!-- 1. card-cont --> */}
                                               <div class="card-cont">
                                                        <div class="card-img">
                                                        <div class="card-badge">
                                                            <i class="red-fav material-symbols-outlined">favorite</i>  
                                                        </div> 
                                                        <img src="https://fastly.picsum.photos/id/807/200/200.jpg?hmac=Y8gayvNItiQYxP_Pd-2un9GH09XuyJdIZOQPw6K9QsI" alt="testimg" />   
                                                        </div>

                                                        <div class="card-details">
                                                             <div> Men Premium Jacket </div>
                                                             <b> Rs. 2000 </b>
                                                        </div>

                                                        <button class="card-button active-button"> Go to Cart</button>
                                               </div>

                                               {/* <!-- 2. card-cont --> */}

                                               <div class="card-cont">
                                                <div class="card-img">
                                                    <div class="card-badge">
                                                        <i class="red-fav material-symbols-outlined">favorite</i>  
                                                    </div> 
                                                    <img src="https://fastly.picsum.photos/id/807/200/200.jpg?hmac=Y8gayvNItiQYxP_Pd-2un9GH09XuyJdIZOQPw6K9QsI" alt="testimg" />   
                                                    </div>

                                                    <div class="card-details">
                                                         <div> Men Premium Jacket </div>
                                                         <b> Rs. 2000 </b>
                                                    </div>

                                                    <button class="card-button"> Add to Cart</button>
                                               </div>


                                               {/* <!-- 3. card-cont --> */}
                                               <div class="card-cont">
                                                <div class="card-img">
                                                    <div class="card-badge">
                                                        <i class="red-fav material-symbols-outlined">favorite</i>  
                                                    </div> 
                                                    <img src="https://fastly.picsum.photos/id/807/200/200.jpg?hmac=Y8gayvNItiQYxP_Pd-2un9GH09XuyJdIZOQPw6K9QsI" alt="testimg" />   
                                                    </div>

                                                    <div class="card-details">
                                                         <div> Men Premium Jacket </div>
                                                         <b> Rs. 2000 </b>
                                                    </div>

                                                    <button class="card-button"> Add to Cart</button>
                                               </div>


                                               {/* <!-- 4. card-cont --> */}
                                               <div class="card-cont">
                                                <div class="card-img">
                                                    <div class="card-badge">
                                                        <i class="red-fav material-symbols-outlined">favorite</i>  
                                                    </div> 
                                                    <img src="https://fastly.picsum.photos/id/807/200/200.jpg?hmac=Y8gayvNItiQYxP_Pd-2un9GH09XuyJdIZOQPw6K9QsI" alt="testimg" />   
                                                    </div>

                                                    <div class="card-details">
                                                         <div> Men Premium Jacket </div>
                                                         <b> Rs. 2000 </b>
                                                    </div>

                                                    <button class="card-button"> Add to Cart</button>
                                               </div>


                                               {/* <!-- 5. card-cont --> */}
                                               <div class="card-cont">
                                                <div class="card-img">
                                                    <div class="card-badge">
                                                        <i class="red-fav material-symbols-outlined">favorite</i>  
                                                    </div> 
                                                    <img src="https://fastly.picsum.photos/id/807/200/200.jpg?hmac=Y8gayvNItiQYxP_Pd-2un9GH09XuyJdIZOQPw6K9QsI" alt="testimg" />   
                                                    </div>

                                                    <div class="card-details">
                                                         <div> Men Premium Jacket </div>
                                                         <b> Rs. 2000 </b>
                                                    </div>

                                                    <button class="card-button"> Add to Cart</button>
                                               </div>


                                               {/* <!-- 6. card-cont --> */}
                                               <div class="card-cont">
                                                <div class="card-img">
                                                    <div class="card-badge">
                                                        <i class="red-fav material-symbols-outlined">favorite</i>  
                                                    </div> 
                                                    <img src="https://fastly.picsum.photos/id/807/200/200.jpg?hmac=Y8gayvNItiQYxP_Pd-2un9GH09XuyJdIZOQPw6K9QsI" alt="testimg" />   
                                                    </div>

                                                    <div class="card-details">
                                                         <div> Men Premium Jacket </div>
                                                         <b> Rs. 2000 </b>
                                                    </div>

                                                    <button class="card-button"> Add to Cart</button>
                                               </div>


                                               {/* <!-- 7. card-cont --> */}
                                               <div class="card-cont">
                                                <div class="card-img">
                                                    <div class="card-badge">
                                                        <i class="red-fav material-symbols-outlined">favorite</i>  
                                                    </div> 
                                                    <img src="https://fastly.picsum.photos/id/807/200/200.jpg?hmac=Y8gayvNItiQYxP_Pd-2un9GH09XuyJdIZOQPw6K9QsI" alt="testimg"/>   
                                                    </div>

                                                    <div class="card-details">
                                                         <div> Men Premium Jacket </div>
                                                         <b> Rs. 2000 </b>
                                                    </div>

                                                    <button class="card-button"> Add to Cart</button>
                                               </div>

                                               {/* <!-- 8. card-cont --> */}
                                               <div class="card-cont">
                                                <div class="card-img">
                                                    <div class="card-badge">
                                                        <i class="red-fav material-symbols-outlined">favorite</i>  
                                                    </div> 
                                                    <img src="https://fastly.picsum.photos/id/807/200/200.jpg?hmac=Y8gayvNItiQYxP_Pd-2un9GH09XuyJdIZOQPw6K9QsI" alt="testimg"/>   
                                                    </div>

                                                    <div class="card-details">
                                                         <div> Men Premium Jacket </div>
                                                         <b> Rs. 2000 </b>
                                                    </div>

                                                    <button class="card-button"> Add to Cart</button>
                                               </div>

                                               {/* <!-- 9. card-cont --> */}
                                               <div class="card-cont">
                                                <div class="card-img">
                                                    <div class="card-badge">
                                                        <i class="red-fav material-symbols-outlined">favorite</i>  
                                                    </div> 
                                                    <img src="https://fastly.picsum.photos/id/807/200/200.jpg?hmac=Y8gayvNItiQYxP_Pd-2un9GH09XuyJdIZOQPw6K9QsI" alt="testimg" />   
                                                    </div>

                                                    <div class="card-details">
                                                         <div> Men Premium Jacket </div>
                                                         <b> Rs. 2000 </b>
                                                    </div>

                                                    <button class="card-button"> Add to Cart</button>
                                               </div>

                                               {/* <!-- 10. card-cont --> */}
                                               <div class="card-cont">
                                                <div class="card-img">
                                                    <div class="card-badge">
                                                        <i class="red-fav material-symbols-outlined">favorite</i>  
                                                    </div> 
                                                    <img src="https://fastly.picsum.photos/id/807/200/200.jpg?hmac=Y8gayvNItiQYxP_Pd-2un9GH09XuyJdIZOQPw6K9QsI" alt="testimg" />   
                                                    </div>

                                                    <div class="card-details">
                                                         <div> Men Premium Jacket </div>
                                                         <b> Rs. 2000 </b>
                                                    </div>

                                                    <button class="card-button"> Add to Cart</button>
                                               </div>

                                               {/* <!-- 11. card-cont --> */}
                                               <div class="card-cont">
                                                <div class="card-img">
                                                    <div class="card-badge">
                                                        <i class="red-fav material-symbols-outlined">favorite</i>  
                                                    </div> 
                                                    <img src="https://fastly.picsum.photos/id/807/200/200.jpg?hmac=Y8gayvNItiQYxP_Pd-2un9GH09XuyJdIZOQPw6K9QsI" alt="testimg" />   
                                                    </div>

                                                    <div class="card-details">
                                                         <div> Men Premium Jacket </div>
                                                         <b> Rs. 2000 </b>
                                                    </div>

                                                    <button class="card-button"> Add to Cart</button>
                                               </div>
                                    

                                            </div>

                                    {/* <!-- 2. products items ends  --> */}

                        </div>
                        {/* <!-- products over  --> */}
                        
    {/* <!-- pl cont over  --> */}
    </div> 
        </>
    ); 
}