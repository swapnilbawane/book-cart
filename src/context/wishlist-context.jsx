import { createContext, useContext } from "react";
import { useData } from "./data-context";
import { useToast } from "./toast-context";

export const WishlistContext = createContext(); 

export function WishlistProvider ( {children} ) { 

    const { addedToWishListToast, removeFromWishListToast } = useToast();
    const { apiData, setApiData } = useData();
    const encodedToken = localStorage.getItem("encodedToken"); 


    const wishlistInfo = apiData?.wishlistData;
   
    // const wishlistQuantity = wishlistInfo.reduce((acc,curr)=> acc+1,0);
    const wishlistQuantity = wishlistInfo.length;

    const addToWishlist = async (item) => { 
        try { 
     
            const sendProduct = { product : item};
           
           const wishlistRes = await fetch("/api/user/wishlist",{
            method: 'POST',
            body: JSON.stringify(sendProduct),
            headers: {
            'Content-Type': 'application/json',
            'authorization': `${encodedToken}`
            } 
           });
          
           if(wishlistRes.status===201) { 
            const response = await wishlistRes.json();
            const updatedWishlist = [...response.wishlist];
         
            setApiData({...apiData, wishlistData: updatedWishlist})
            addedToWishListToast();
        }
           
           else if(wishlistRes.status===404) { 
           console.log("404 Error from Add to wishlist. Email is not registered.");
           }
           else if(wishlistRes.status===500) { 
            console.log("500 Error from Add to wishlist."); 
           }
    
           }
           catch(error) { 
            console.log(error); 
           }

    }

    const deleteFromWishlist = async (id) => {       
        try { 
            const fetchURL = "/api/user/wishlist/"+id;
            const wishlistRes = await fetch(fetchURL,{
             method: 'DELETE',
             headers: {
             'Content-Type': 'application/json',
             'authorization': `${encodedToken}`
             } 
            });
           
            if(wishlistRes.status===200) { 
                const response = await wishlistRes.json();
                const updatedWishlist = [...response.wishlist];
                setApiData({...apiData, wishlistData: updatedWishlist})
                removeFromWishListToast();
            }

            else if(wishlistRes.status===404) { 
                console.log("404 Error from Remove from wishlist. Email is not registered.");
            }
            else if(wishlistRes.status===500) { 
                console.log("500 Error from Remove from wishlist."); 
            }
            
     
            }
            catch(error) { 
             console.log(error); 
            }

    }

   return (
    <WishlistContext.Provider value={{addToWishlist, deleteFromWishlist, wishlistQuantity}}>
        {children}
    </WishlistContext.Provider>
   ); 

}

export const useWishlist = () => useContext(WishlistContext); 