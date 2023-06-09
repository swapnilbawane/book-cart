import { useParams } from "react-router";
import { ProductCard } from "../Products/ProductCard";
import { Header } from "../../components/Header";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useData } from "../../context/data-context";

export function CategoryDetail() {

    const {apiData} = useData();  
    const { _id } = useParams(); 

    const urlFetch = "/api/categories/"+_id;

    const [categoryData,setCategoryData]=useState([]); 


    useEffect(()=> { 
        const getCategoryData = async() => { 
            try { 
               const res = await fetch(urlFetch);
               const categoryIndividual = await res.json();      
               const filterValue = categoryIndividual.category.categoryName;
               const filterData = apiData.product.products.filter((item)=> item.categoryName === filterValue); 
               setCategoryData(filterData);
            }
            catch(error) { 
                console.log("Category Detail error message: ",error); 
            }
        }


        getCategoryData(); 
    },[apiData.product.products,urlFetch]);
    

   
return(
<>
<Header /> 
  {
   categoryData.map((item) => { 
    return (
        <div key={item._id}> 
                <ProductCard {...item} />
        </div> 
    );
   })
  }
   
<Link to="/products"> Browse other products </Link> 
</>
    );
}