import { useParams } from "react-router";
import { ProductCard } from "./ProductCard";
import { Header } from "../../components/Header";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function ProductDetail() { 

    const { _id } = useParams(); 
    const urlFetch = "/api/products/"+_id;
    const [productData,setProductData]=useState([]); 

    const getProductData = async() => { 
        try { 
           const res = await fetch(urlFetch);
           const data1 = await res.json();
           return data1;
        }
        catch(error) { 
            console.log(error); 
        }
    }

   useEffect(()=> { 
    (async() => { 
        const data = await getProductData();
        setProductData(data.product);
    })();
     
   },[]);
    

    return (
        <> 
       <Header /> 
       <ProductCard {...productData} />
       <Link to="/products"> Browse other products </Link> 
        </>
    );
}