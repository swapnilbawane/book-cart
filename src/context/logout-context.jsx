import { useNavigate } from "react-router-dom";
import { useAuth } from "./auth-context";
import { useData } from "./data-context";
import { useContext, createContext } from "react";
import { useCart } from "./cart-context";
import { useWishlist } from "./wishlist-context";

export const LogoutContext = createContext(); 

export function LogoutProvider({children}) { 

const navigate = useNavigate();
const { apiData,setApiData } = useData(); 
const { setIsLoggedIn } = useAuth();
const { removeFromCart } = useCart();
const { deleteFromWishlist } = useWishlist(); 

 // Logout handler 
 const handleLogout = (cartData) => { 
    
    console.log("cart data length:",apiData.cartData.length );

    if(cartData.length===1){
    removeFromCart(cartData[0]._id);
    }

    if(apiData.cartData.length>0) { 
        apiData?.cartData?.forEach((item) => {
            console.log(item);
            removeFromCart(item._id);
          });
    }

    console.log("cart data length after:",apiData.cartData.length );
    
    if(apiData.wishlistData.length>0) { 
        apiData?.wishlistData?.forEach((item) => {
            deleteFromWishlist(item._id);
          });
    }

    localStorage.removeItem("encodedToken");
    setIsLoggedIn(false); 
    navigate('/');
   
   }


    return(
        <>
        <LogoutContext.Provider value={{handleLogout}}>
            {children}
        </LogoutContext.Provider>
        </>
    );
}

export const useLogout = () => useContext(LogoutContext); 