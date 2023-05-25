import { createContext, useContext, useState } from "react";
import { useData } from "./data-context";
import { useEffect } from "react";

export const CartContext = createContext(); 

export function CartProvider({children}) { 


    const {apiData, setApiData} = useData();
    const encodedToken = localStorage.getItem("encodedToken"); 

    const addToCart = async (item) => { 

       try { 
     
        const sendProduct = { product : item};
       
       const cartres = await fetch("/api/user/cart",{
        method: 'POST',
        body: JSON.stringify(sendProduct),
        headers: {
        'Content-Type': 'application/json',
        'authorization': `${encodedToken}`
        } 
       });
      
       const response = await cartres.json();
       const updatedCart = [...response.cart];
       console.log("cart items updated:", updatedCart );
    
       setApiData({...apiData, cartData: updatedCart})

       }
       catch(error) { 
        console.log(error); 
       }

    }

    const removeFromCart = async(id) => { 
        try { 
           const fetchURL = "/api/user/cart/"+id;
           const cartres = await fetch(fetchURL,{
            method: 'DELETE',
            headers: {
            'Content-Type': 'application/json',
            'authorization': `${encodedToken}`
            } 
           });
          
           const response = await cartres.json();
           const updatedCart = [...response.cart];
           console.log("cart items updated:", updatedCart );
        
           setApiData({...apiData, cartData: updatedCart})
    
           }
           catch(error) { 
            console.log(error); 
           }

    }

    return (
        <CartContext.Provider value={{addToCart, removeFromCart}}>
            {children}
        </CartContext.Provider>
    ); 
}

export const useCart = () => useContext(CartContext);