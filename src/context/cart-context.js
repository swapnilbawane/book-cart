import { createContext, useContext, useState } from "react";
import { useData } from "./data-context";
import { useEffect } from "react";

export const CartContext = createContext(); 

export function CartProvider({children}) { 

    const [itemData, setItem] = useState(null);

    const apiData = useData();
    const encodedToken = localStorage.getItem("encodedToken"); 

    const addToCart = async (item) => { 


       try { 
       console.log("here in cart:",item);
  
       const sendProduct = { product : item};
       
       console.log("sendproduct",sendProduct);
       console.log("json", JSON.stringify(sendProduct));
       console.log("encodedToken", encodedToken);

       const cartres = await fetch("/api/user/cart",{
        method: 'POST',
        body: JSON.stringify(sendProduct),
        headers: {
        'Content-Type': 'application/json',
        'authorization': "${encodedToken}"
        } 
       });

    

    //    setItem(item);

       }
       catch(error) { 
        console.log(error); 
       }

    }

    useEffect(()=> {
        addToCart(itemData);
    }, []); 


    return (
        <CartContext.Provider value={addToCart}>
            {children}
        </CartContext.Provider>
    ); 
}

export const useCart = () => useContext(CartContext);