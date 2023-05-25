
import { useContext, useState, createContext } from "react";
import {useLocation, useNavigate} from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AuthContext = createContext();

export function AuthProvider({children}) { 

  const [isLoggedIn ,setIsLoggedIn] = useState(false);

  const navigate = useNavigate(); 
  const location = useLocation(); 

  const showToastMessage = () => { 
      toast.success('Logged in !', {
      position: toast.POSITION.TOP_RIGHT
  });
  }

   const loginAccount = async (user) => { 
      try {
         const creds = { 
          email: user.email,
          password: user.password
         }
          
         const res = await fetch("/api/auth/login", {
         method: 'POST',
         body: JSON.stringify(creds)   
         });
         
         const { encodedToken } = await res.json();
         showToastMessage();
         localStorage.setItem("encodedToken",encodedToken); 
         
         
         if(location?.state?.from?.pathname==="/wishlist") {
          navigate('/wishlist');
        } 
         else if(location?.state?.from?.pathname==="/cart") { 
          navigate('/cart');
         }
         else navigate('/products');

         setIsLoggedIn(true); 
      }
      catch(error) { 
       console.log(error);
      }
   }


   const handleLogout = (event) => { 
    event.preventDefault();
    console.log("Logging out....");
    setIsLoggedIn(false);   
    navigate('/');
   }

   

    return(
      <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn, loginAccount, handleLogout}}>
        {children}
      </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);