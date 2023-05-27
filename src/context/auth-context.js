
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
       
       const { encodedToken } = await res.json();
       showToastMessage();
       localStorage.setItem("encodedToken",encodedToken); 
      //  console.log("type", typeof encodedToken);
       
       
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
        //  console.log("type", typeof encodedToken);
         
         
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
    // console.log("Logging out....");
    setIsLoggedIn(false);   
    navigate('/');
   }

   const handleLogin = (event) => { 
    event.preventDefault(); 
    // console.log("Logging in.....");
    navigate('/login'); 
   }

   const handleSignup = (event) => { 
    event.preventDefault(); 
    // console.log("Logging in.....");
    navigate('/signup'); 
   }

   const handleWishlist = (event) => { 
    event.preventDefault(); 
    // console.log("Going to wishlist.....");
    navigate('/wishlist');
   }

   const handleCart = (event) =>{ 
    event.preventDefault(); 
    // console.log("Going to cart.....");
    navigate('/cart'); 
   }

   const handleHome = (event) =>{ 
    event.preventDefault(); 
    // console.log("Going to home page.....");
    navigate('/'); 
   }

   const handleHomeCategories = (event) =>{ 
    event.preventDefault(); 
    /* console.log("Going to home page....."); */
    navigate('/products'); 
   }

   const handleRememberMe = (event, user) => { 
      if(event.target.checked) {
        localStorage.setItem("email",user.email );
        localStorage.setItem("password", user.password);
      }

   }

  const handleTestUser = async () => { 
    // console.log("handle test user")
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
      // console.log("type testuser", typeof encodedToken);
      
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