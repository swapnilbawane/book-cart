import { createContext, useContext } from "react";

export const WishlistContext = createContext(); 

export function WishlistProvider ( {children} ) { 

    

   return (
    <WishlistContext.Provider>
        {children}
    </WishlistContext.Provider>
   ); 

}

export const useWishlist = () => useContext(WishlistContext); 