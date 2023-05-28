import { createContext, useContext, useState } from "react";

export const ErrorContext = createContext();

export function ErrorProvider({children}) { 

 const [ error, setError ] = useState({
 products: "", 
 category: "",
 cart: "",
 wishlist: ""
});


    return (
     <ErrorContext.Provider value={{error, setError}}>
        {children}
     </ErrorContext.Provider>

    ); 
}

export const useErrorContextApp = () => useContext(ErrorContext); 