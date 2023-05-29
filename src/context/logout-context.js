import { useNavigate } from "react-router-dom";
import { useAuth } from "./auth-context";
import { useData } from "./data-context";
import { useContext, createContext } from "react";

export const LogoutContext = createContext(); 

export function LogoutProvider({children}) { 

const navigate = useNavigate;
const { apiData, setApiData } = useData(); 
const { setIsLoggedIn } = useAuth();


 // Logout handler 
 const handleLogout = () => { 
    
    localStorage.removeItem("encodedToken");
    setIsLoggedIn(false); 
    setApiData({...apiData, cartData:[], wishlistData:[]});
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