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

const response = await fetch("/api/products"); 
if(response.status===200) {
    data = await response.json();
    console.log("API", data); 
 }

const categoriesResponse = await fetch("/api/categories");
if(categoriesResponse.status===200) {
    categoryList = await categoriesResponse.json(); 
    console.log("categorylist",categoryList); 
}

setApiData({...apiData, product: data,category: categoryList});

}
catch(error) { 
console.log(error); 
}

}

useEffect(()=> {
getData(); 
if (!localStorage.getItem("isLoggedIn")) {
    localStorage.setItem("isLoggedIn", "false");}
},[]);

return (
<DataContext.Provider value={apiData}>
    {children}
</DataContext.Provider>

); 
}

export const useData = () => useContext(DataContext);

