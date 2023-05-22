import { useParams } from "react-router";
import { ProductCard } from "../Products/ProductCard";
import { Header } from "../../components/Header";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export function CategoryDetail() {
    const { _id } = useParams(); 
    const urlFetch = "/api/category"+_id;
    const [categoryData,setCategoryData]=useState(""); 

    const getCategoryData = async() => { 
        try { 
           const res = await fetch(urlFetch);
           const data2 = await res.json();
           return data2;
        }
        catch(error) { 
            console.log(error); 
        }
    }

   useEffect(()=> { 
    (async() => { 
        const data = await getCategoryData();
        const filterValue = data.category.categoryName; 
        // const filterData = apiData.product.products
        setCategoryData(data.category.categoryName);
    })();
     
   },[]);
    


    return(
        <>
       <Header /> 
  {/* {
   productData
  } */}
       {/* <ProductCard {...productData} /> */}

       <Link to="/products"> Browse other products </Link> 
        </>
    );
}