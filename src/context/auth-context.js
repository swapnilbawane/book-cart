
import { useContext, useState, createContext } from "react";
import {useLocation, useNavigate} from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useData } from "./data-context";

export const AuthContext = createContext();

export function AuthProvider({children}) { 

  const [isLoggedIn ,setIsLoggedIn] = useState(false);
  const navigate = useNavigate(); 
  const location = useLocation(); 

  // Toast handler 
  const showToastMessage = () => { 
      toast.success('Logged in !', {
      position: toast.POSITION.TOP_RIGHT
  });
  }

  // Signup Handler 
  const signUpAccount = async (user) => { 
    try {
       const creds = { 
        email: user.email,
        password: user.password
       }
        
       const res = await fetch("/api/auth/signup", {
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
     console.log("signup error",error);
    }
 }

 // Login handler
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


   // Test user handler 
   const handleTestUser = async () => { 
    try {
      const creds = { 
       email: "adarshbalika@gmail.com",
       password: "adarshbalika"
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
   
   // Handle remember me 
   const handleRememberMe = (event, user) => { 
      if(event.target.checked) {
        localStorage.setItem("email",user.email );
        localStorage.setItem("password", user.password);
      }

   }

  

    return(
      <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn, loginAccount, handleRememberMe, handleTestUser, signUpAccount}}>
        {children}
      </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);