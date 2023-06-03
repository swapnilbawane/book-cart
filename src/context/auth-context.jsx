
import { useContext, useState, createContext } from "react";
import {useLocation, useNavigate} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { useToast } from "./toast-context";

export const AuthContext = createContext();

export function AuthProvider({children}) { 

  const [isLoggedIn ,setIsLoggedIn] = useState(false);
  const [userDetails, setUserDetails] = useState([]); 

  const navigate = useNavigate(); 
  const location = useLocation(); 

// Toast handler 
const { showLoggedInToastMessage, emailNotFoundToastMessage, passwordWrongToastMessage,emailExistsToastMessage } = useToast();

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

       if(res.status===201) { 
        console.log("Signup response in auth context:", res); 

        const { encodedToken } = await res.json();
        showLoggedInToastMessage();
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

       else if(res.status===422) { 
        // Email Already Exists.
        emailExistsToastMessage();
        navigate('/login');
       }
       else if(res.status===500) { 
        // 500 error 
        console.log("Error 500 while creating account.")
       }
       
    }
    catch(error) { 
     console.log("Signup error: ",error);
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

         console.log("Login response in auth context:", res); 
         
         if(res.status===200) { 
           
          const { foundUser, encodedToken } = await res.json();
          

          showLoggedInToastMessage();
          localStorage.setItem("encodedToken",encodedToken); 

          setIsLoggedIn(true); 
          setUserDetails(foundUser);
       

          if(location?.state?.from?.pathname==="/wishlist") {
           navigate('/wishlist');
         } 
          else if(location?.state?.from?.pathname==="/cart") { 
           navigate('/cart');
          }
          else if(location?.state?.from?.pathname==="/profile") { 
            navigate('/profile'); 
          }
          else navigate('/products');
 
          

         }

         else if(res.status===404) { 
          emailNotFoundToastMessage();
          navigate('/signup');
         }

         else if(res.status===401){
          passwordWrongToastMessage(); 
         }
         
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
      
      if(res.status===200) { 
        const { foundUser, encodedToken } = await res.json();
        showLoggedInToastMessage();
        localStorage.setItem("encodedToken",encodedToken); 
        
        if(location?.state?.from?.pathname==="/wishlist") {
         navigate('/wishlist');
       } 
        else if(location?.state?.from?.pathname==="/cart") { 
         navigate('/cart');
        }
        else navigate('/products');
  

        setIsLoggedIn(true);
        setUserDetails(foundUser);
      }

      else if(res.status===404) { 
        // The email you entered is not Registered.
        emailNotFoundToastMessage();
        navigate('/signup'); 
      }

      else if(res.status===401) { 
        // The credentials you entered are invalid.
        passwordWrongToastMessage(); 
      }

      else if(res.status===500) { // error
        console.log("Login as test user 500 Error.")
      }
      
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
      <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn, loginAccount, handleRememberMe, handleTestUser, signUpAccount, userDetails}}>
        {children}
      </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);