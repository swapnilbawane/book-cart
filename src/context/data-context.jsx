import { useState, useContext, createContext, useEffect } from "react"; 
import { useErrorContextApp } from "../context-APIErrorManagement/error-context";
import { useAuth } from "./auth-context";

export const DataContext = createContext(); 

export function DataProvider({children}) { 

  // set initial data 
const [ apiData, setApiData ] = useState({
    product:[],
    category:[],
    cartData:[],
    wishlistData:[]
} ); 


// get error variable to set error data 
const { error, setError } = useErrorContextApp();
const { isLoggedIn } = useAuth();


console.log("Logged in status from data context:", isLoggedIn);
console.log("Data from API:", apiData);

// this initializes all the data - product,category,cart and wishlist data 
const getData = async () => { 
try { 
let productList=[];
let categoryList=[]; 
let cartList=[];
let wishListResponseData=[];


// PRODUCTS RESPONSE 

try {
  const productsResponse = await fetch("/api/products"); 
  if(productsResponse.status===200) {
      productList = await productsResponse.json();
   }
   else if(productsResponse.status===404) { 
    console.log("product 404:",productsResponse) 
    setError({...error, products: "404 productsResponse"});
  }
   else if(productsResponse.status===500) { 
    console.log("product 500:",productsResponse) 
    setError({...error, products: "500 productsResponse"});
  }  
   else { 
    setError({...error, products: "Other error code productsResponse."});
   }
}
catch(productsError) { 
  setError({...error, products: "Cannot fetch products data, Error in fetching backend data. Please contact administrator."});
}

// CATEGORIES RESPONSE 

try {
  const categoriesResponse = await fetch("/api/categories");
if(categoriesResponse.status===200) {
    categoryList = await categoriesResponse.json();   
}
else if(categoriesResponse.status===404) { 
  console.log("categories 404:",categoriesResponse);
  setError({...error, category: "404 Response"});
}
else if(categoriesResponse.status===500) { 
  console.log("categories 500:",categoriesResponse);
  setError({...error, category: "500 Response"});
} 
else { 
 setError({...error, category: "Other error code response."});
}
}
catch(categoriesError) {
  setError({...error, category: "Cannot fetch categories data, Error in fetching backend data. Please contact administrator."});
}

// PRIVATE ROUTE TOKEN 

const encodedToken = localStorage.getItem("encodedToken"); 

// CART RESPONSE 

if(isLoggedIn===true) { 
  try { 
    const cartResponse = await fetch("/api/user/cart", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `${encodedToken}`
      }
    });
  
  if(cartResponse.status===200) {
      cartList = await cartResponse.json();
      cartList = cartList.cart;  
  } 
  else if(cartResponse.status===404) { 
    console.log("cart 404:",cartResponse);
    setError({...error, cart: "404 Response"});
  }
  else if(cartResponse.status===500) { 
    console.log("cart 500:",cartResponse);
    setError({...error, cart: "500 Response"});
  } 
  else { 
    setError({...error, cart: "Other error code response."});
   }
  }
  catch(cartError) { 
    setError({...error, cart: "Cannot fetch cart data, Error in fetching backend data. Please contact administrator."});
  }
  
  
  // WISHLIST RESPONSE  
  
  try { 
    const wishListResponse = await fetch("/api/user/wishlist", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `${encodedToken}`
  
      }
    });
  if(wishListResponse.status===200) {
      wishListResponseData = await wishListResponse.json();
      wishListResponseData = wishListResponseData.wishlist;
  } 
  else if(wishListResponse.status===404) { 
    console.log("wishlist 404:",wishListResponse);
    setError({...error, wishlist: "404 Response"});
  }
  else if(wishListResponse.status===500) { 
    console.log("wishlist 404:",wishListResponse);
    setError({...error, wishlist: "500 Response"});
  }
  else { 
    setError({...error, wishlist: "Other error code response."});
   }
  
  }
  catch(wishlistError) {
    setError({...error, wishlist: "Cannot fetch wishlist data, Error in fetching backend data. Please contact administrator."});
  }

  
}



setApiData({...apiData, product: productList,category: categoryList, cartData: cartList, wishlistData: wishListResponseData});

}
catch(error) { 
console.log("Error: data-context: caught by main try block:",error);
}

}


// USE EFFECT TO LOAD THE DATA FOR THE FIRST TIME. 
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

