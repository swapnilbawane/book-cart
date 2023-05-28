import { useParams } from "react-router";
import { ProductCard } from "../Products/ProductCard";
import { Header } from "../../components/Header";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useData } from "../../context/data-context";

export function CategoryDetail() {

    const {apiData} = useData();  
    const { _id } = useParams(); 

    const urlFetch = "/api/categories/"+_id;

    const [categoryData,setCategoryData]=useState([]); 

    const getCategoryData = async() => { 
        try { 
           const res = await fetch(urlFetch);
           const categoryIndividual = await res.json();      
           return categoryIndividual;
        }
        catch(error) { 
            console.log(error); 
        }
    }

   useEffect(()=> { 
    (async() => { 
        const data = await getCategoryData();
        const filterValue = data.category.categoryName; 
        const filterData = apiData.product.products.filter((item)=> item.categoryName === filterValue); 
        // this will give me [] of objects 
        // map this after setting it to category data 
        setCategoryData(filterData);
    })();
     
   },[]);
    


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