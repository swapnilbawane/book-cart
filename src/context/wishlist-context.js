import { createContext, useContext } from "react";
import { useData } from "./data-context";

export const WishlistContext = createContext(); 

export function WishlistProvider ( {children} ) { 

    const {apiData, setApiData} = useData();
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
          
           const response = await wishlistRes.json();
           const updatedWishlist = [...response.wishlist];
        
           setApiData({...apiData, wishlistData: updatedWishlist})
    
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
           
            const response = await wishlistRes.json();
            const updatedWishlist = [...response.wishlist];
         
            setApiData({...apiData, wishlistData: updatedWishlist})
     
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