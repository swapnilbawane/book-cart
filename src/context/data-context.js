import { useState, useContext, createContext, useEffect } from "react"; 

export const DataContext = createContext(); 

export function DataProvider({children}) { 

const [ apiData, setApiData ] = useState([]); 

const getData = async () => { 
try { 
const response = await fetch("/api/products"); 
if(response.status===200) {
    const data = await response.json();
    console.log("API", data); 
    setApiData(data); 
}

}
catch(error) { 
console.log(error); 
}

}

useEffect(()=> {
getData(); 
},[]);

return (
<DataContext.Provider value={apiData}>
    {children}
</DataContext.Provider>

); 
}

export const useData = () => useContext(DataContext);

