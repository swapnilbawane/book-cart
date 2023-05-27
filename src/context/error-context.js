import { createContext, useContext, useState } from "react";
export const ErrorContext = createContext();

export function ErrorProvider({children}) { 

 const [ errorCategory, setErrorCategory ] = useState(null);

   function CategoryFetchingError() {
     return (
        <>
        <h1> There was an error fetching products. Please get back later. </h1>
        </> 
     );
   }

  




    return (
     <ErrorContext.Provider value={{errorCategory, setErrorCategory}}>
        {children}
     </ErrorContext.Provider>

    ); 
}

export const useError = () => useContext(ErrorProvider); 