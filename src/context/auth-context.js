
import { useContext, useState, createContext } from "react";

export const AuthContext = createContext();

export function AuthProvider({children}) { 

    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn") === "false");
    console.log("here",isLoggedIn); 

    const handleLogin = () => {
      setIsLoggedIn(true);
      localStorage.setItem("isLoggedIn", "true");
    };

    const handleLogout = () => {
      setIsLoggedIn(false);
      localStorage.setItem("isLoggedIn", "false");
    };


    return(
      <AuthContext.Provider value={{isLoggedIn,setIsLoggedIn,handleLogin, handleLogout}}>
        {children}
      </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);