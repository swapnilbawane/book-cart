import { createContext, useContext } from "react";
import { useData } from "./data-context";
import { useNavigate } from "react-router-dom"; 
import { useToast } from "./toast-context";

export const CartContext = createContext(); 

export function CartProvider({children}) { 

   const navigate = useNavigate(); 
   const { addedToCartToast, removedFromCartToast  } = useToast();

    const {apiData, setApiData} = useData();
    const cartInfo = apiData?.cartData;
   
    const encodedToken = localStorage.getItem("encodedToken"); 

    const totalPrice =cartInfo.reduce((acc,curr)=> acc+Number(curr.price)*curr.qty,0);
    const totalQuantity = cartInfo.reduce((acc,curr)=> acc+ (curr.qty > 0 ? curr.qty : 0),0);
   
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
      
       if(cartres.status===201) { 
        const response = await cartres.json();
        const updatedCart = [...response.cart];
        setApiData({...apiData, cartData: updatedCart})
        addedToCartToast(); 
       }

    else if(cartres.status===404) { 
        console.log("Email not registered. Error from Add to cart.");
    }

    else if(cartres.status===500) { 
        console.log("500 Error from Add to cart.");
    }
       
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
          
           if(cartres.status===200) { 
            const response = await cartres.json();
            const updatedCart = [...response.cart];
            setApiData({...apiData, cartData: updatedCart});
            removedFromCartToast();
        }
          
           else if(cartres.status===404) { 
            console.log("Email not registered. Error from Remove from cart.");
           }

           else if(cartres.status===500) { 
            console.log("500 Error from Remove from cart.");
           }
    
           }
           catch(error) { 
            console.log(error); 
           }

    }

    const incrementInCart = async(id) => { 
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
           
            if(cartres.status===200) { 
                const response = await cartres.json();
                const updatedCart = [...response.cart];
                setApiData({...apiData, cartData: updatedCart});
            }

            else if(cartres.status===404) { 
                console.log("Email not registered. 404 Error from Increment in Cart function.");
            }

            else if(cartres.status===500) { 
                console.log("500 Error from Increment in Cart function. ");
            }
            
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
           
            if(cartres.status===200) { 
            const response = await cartres.json();
            const updatedCart = [...response.cart];
            setApiData({...apiData, cartData: updatedCart});
            } 
            
            else if(cartres.status===404) { 
                console.log("Email not registered. 404 Error from Decrement in Cart function.");
            }

            else if(cartres.status===500) { 
                console.log("500 Error from Decrement in Cart function. ");
            }
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