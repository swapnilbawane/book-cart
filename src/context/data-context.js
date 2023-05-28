import { useState, useContext, createContext, useEffect } from "react"; 
import { useErrorContextApp } from "../APIErrorManagement/error-context";

export const DataContext = createContext(); 

export function DataProvider({children}) { 

const [ apiData, setApiData ] = useState({
    product:[],
    category:[],
    cartData:[],
    wishlistData:[]
} ); 

const { error, setError } = useErrorContextApp();
console.log("error category",error.category);
console.log("error cart",error.cart);
console.log("error wishlist",error.wishlist);
console.log("error products",error.products);


const getData = async () => { 
try { 
let data=[];
let categoryList=[]; 
let cartList=[];
let wishListResponseData=[];

try {
  const response = await fetch("/api/products"); 
  if(response.status===200) {
      data = await response.json();
   }
   else { 
    setError({...error, products: "Cannot fetch products, Network is down. Try again later."});
   }
}
catch(productsError) { 
  setError({...error, products: "Cannot fetch products data, Error in fetching backend data. Please contact administrator."});
}


try {
  const categoriesResponse = await fetch("/api/categories");
if(categoriesResponse.status===200) {
    categoryList = await categoriesResponse.json();   
}
else { 
 setError({...error, category: "Cannot fetch categories, Network is down. Try again later."});
}
}
catch(categoriesError) {
  setError({...error, category: "Cannot fetch categories data, Error in fetching backend data. Please contact administrator."});
}

const encodedToken = localStorage.getItem("encodedToken"); 


try { 
  const cartResponse = await fetch("/api/user/cart", {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'authorization': `${encodedToken}`
    }
  });
console.log("cart Response RAW: ", cartResponse);  
if(cartResponse.status===200) {
    cartList = await cartResponse.json();
    cartList = cartList.cart; 
    console.log("fetching cart from here:",cartList)  
} 
else if(cartResponse.status===500)
{ console.log("cart500:",cartResponse)
} 
else { 
  setError({...error, cart: "Cannot fetch cart data, Network is down. Try again later."});
 }
}
catch(cartError) { 
  setError({...error, cart: "Cannot fetch cart data, Error in fetching backend data. Please contact administrator."});
}

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
} 
else { 
  setError({...error, wishlist: "Cannot fetch wishlist data, Network is down. Try again later."});
 }

}
catch(wishlistError) {
  setError({...error, wishlist: "Cannot fetch wishlist data, Error in fetching backend data. Please contact administrator."});
}




setApiData({...apiData, product: data,category: categoryList, cartData: cartList, wishlistData: wishListResponseData});

}
catch(error) { 
console.log("error in api endpoint:",error);
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

