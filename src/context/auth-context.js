
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

       console.log("res from signup:", res);
       
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
    setIsLoggedIn(false);   
    navigate('/');
   }

   const handleLogin = (event) => { 
    event.preventDefault(); 
    navigate('/login'); 
   }

   const handleSignup = (event) => { 
    event.preventDefault(); 
    navigate('/signup'); 
   }

   const handleWishlist = (event) => { 
    event.preventDefault(); 
    navigate('/wishlist');
   }

   const handleCart = (event) =>{ 
    event.preventDefault(); 
    navigate('/cart'); 
   }

   const handleHome = (event) =>{ 
    event.preventDefault(); 
    navigate('/'); 
   }

   const handleHomeCategories = (event) =>{ 
    event.preventDefault(); 
    navigate('/products'); 
   }

   const handleRememberMe = (event, user) => { 
      if(event.target.checked) {
        localStorage.setItem("email",user.email );
        localStorage.setItem("password", user.password);
      }

   }

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

    return(
      <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn, loginAccount, handleLogout, handleRememberMe, handleTestUser, handleLogin, handleWishlist, handleCart, handleHome, handleHomeCategories,handleSignup, signUpAccount}}>
        {children}
      </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);