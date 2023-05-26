import { createContext, useContext, useState } from "react";
import { useData } from "./data-context";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom"; 

export const CartContext = createContext(); 

export function CartProvider({children}) { 

   const navigate = useNavigate(); 

    const {apiData, setApiData} = useData();
    const encodedToken = localStorage.getItem("encodedToken"); 

    const cartInfo = apiData?.cartData;
    // console.log("cart info",cartInfo);
   
    const totalPrice = Array.from(cartInfo).reduce((acc,curr)=> acc+Number(curr.price)*curr.qty,0);
    const totalQuantity = Array.from(cartInfo).reduce((acc,curr)=> acc+ (curr.qty > 0 ? curr.qty : 0),0);

    // Array.from(cartInfo).reduce((acc,curr)=> acc+Number(curr.price)*curr.qty,0);
    //cartInfo?.reduce((acc,curr)=> acc+Number(curr.price)*curr.qty,0));
    // Array.from(cartInfo).reduce((acc,curr)=> acc+Number(curr.price)*curr.qty,0);
    // cartInfo?.cart.reduce((acc,curr)=> acc+Number(curr.price)*curr.qty,0) ?? 0;
    // [...cartInfo].reduce((acc,curr)=> acc+Number(curr.price)*curr.qty,0);
   
    const discount = 10;
    const deliveryCharges = 49; 

   

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
    //    console.log("cart items updated:", updatedCart );
    
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
        //    console.log("cart items updated:", updatedCart );
        
           setApiData({...apiData, cartData: updatedCart})
    
           }
           catch(error) { 
            console.log(error); 
           }

    }

    const incrementInCart = async(id,qty) => { 
        try { 
            const incrementQty = { action : {type: "increment"} };

            const fetchURL = "/api/user/cart/"+id;
            const cartres = await fetch(fetchURL,{
             method: 'POST',
             body: JSON.stringify(incrementQty),
             headers: {
             'Content-Type': 'application/json',
             'authorization': `${encodedToken}`
             } 
            });
           
            const response = await cartres.json();
            const updatedCart = [...response.cart];
            // console.log("increment cart items updated:", updatedCart );

            // const qtyV = Array.from(updatedCart).find((product)=>product._id===id).qty;

            // console.log("qtyV+",Array.from(updatedCart).find((product)=>product._id===id).qty);


            setApiData({...apiData, cartData: updatedCart});

            // setQtyValue(()=> qtyV);
     
            }
            catch(error) { 
             console.log(error); 
            }
 
    }

    const decrementInCart = async(id,qty) => { 
        try { 
            const decrementQty = { action : {type: "decrement"} };

           if(qty===0 || qty===-1)
           { 
            // removeFromCart(id);
            navigate('/products');
           } 
           else if(qty>1 && qty>0) { 
            const fetchURL = "/api/user/cart/"+id;
            const cartres = await fetch(fetchURL,{
             method: 'POST',
             body: JSON.stringify(decrementQty),
             headers: {
             'Content-Type': 'application/json',
             'authorization': `${encodedToken}`
             } 
            });
           
            const response = await cartres.json();
            const updatedCart = [...response.cart];
            // console.log("increment cart items updated:", updatedCart );
          
            // const qtyV = Array.from(updatedCart).find((product)=>product._id===id).qty;

            // console.log("qtyV-",Array.from(updatedCart).find((product)=>product._id===id).qty);

            setApiData({...apiData, cartData: updatedCart});
            
            // setQtyValue(()=> qtyV);
            
        }
     
            }
            catch(error) { 
             console.log(error); 
            }
 
    }

    return (
        <CartContext.Provider value={{addToCart, removeFromCart, totalPrice, discount, deliveryCharges, totalQuantity, incrementInCart, decrementInCart}}>
            {children}
        </CartContext.Provider>
    ); 
}

export const useCart = () => useContext(CartContext);