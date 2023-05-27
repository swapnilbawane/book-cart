import { useState, useContext, createContext, useEffect } from "react"; 

export const DataContext = createContext(); 

export function DataProvider({children}) { 

const [ apiData, setApiData ] = useState({
    product:[],
    category:[],
    cartData:[],
    wishlistData:[]
} ); 


const getData = async () => { 
try { 
let data;
let categoryList; 
let cartList;
let wishListResponseData;

const response = await fetch("/api/products"); 
if(response.status===200) {
    data = await response.json();
 }

const categoriesResponse = await fetch("/api/categories");
if(categoriesResponse.status===200) {
    categoryList = await categoriesResponse.json(); 
   
}

const encodedToken = localStorage.getItem("encodedToken"); 

const cartResponse = await fetch("/api/user/cart", {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'authorization': encodedToken
    }
  });
if(cartResponse.status===200) {
    cartList = await cartResponse.json();
     
}  

const wishListResponse = await fetch("/api/user/wishlist", {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'authorization': encodedToken
      
    }
  });
if(wishListResponse.status===200) {
    wishListResponseData = await wishListResponse.json();
} 


setApiData({...apiData, product: data,category: categoryList, cartData: cartList, wishlistData: wishListResponseData});

}
catch(error) { 
<h1> You encountered an error. We regret about it. We'll fix it soon. Reach out to us at abc@gmail.com </h1>
}

}

useEffect(()=> {
getData(); 
},[]);

return (
<DataContext.Provider value={{apiData, setApiData}}>
    {children}
</DataContext.Provider>

); 
}

export const useData = () => useContext(DataContext);

