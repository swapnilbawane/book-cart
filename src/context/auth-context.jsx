
import { useContext, useState, createContext } from "react";
import {useLocation, useNavigate} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { useToast } from "./toast-context";
import axios from "axios";


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
        password: user.password,
        firstName: user.firstName,
        lastName: user.lastName
       }
        
       const res = await fetch("/api/auth/signup", {
       method: 'POST',
       body: JSON.stringify(creds)   
       });

       if(res.status===201) { 
        console.log("AuthContext - Signup response", res); 

        const { createdUser, encodedToken } = await res.json();
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
        setUserDetails(createdUser);
         
       }

       else if(res.status===422) { 
        // Email Already Exists.
        emailExistsToastMessage();
        navigate('/login');
       }
       else if(res.status===500) { 
        // 500 error 
        console.log("Auth Context: Error 500 while creating account.")
       }
       
    }
    catch(error) { 
     console.log("Auth Context: Signup error: ",error);
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

        //  console.log("Auth Context: Login response:", res); 
         
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
       console.log("Auth context error",error);
      }
   }

// Test user handler 
   const handleTestUser = async () => { 
    try {
      const creds = { 
       email: "adarshbalika@gmail.com",
       password: "adarshbalika"
      }

      console.log("creds",creds);
       
      const res = await fetch("/api/auth/login", {
        method: 'POST',
        body: JSON.stringify(creds)   
        });
      
      
      console.log("response from test user",res);
      
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
         else navigate('/products');


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
        console.log("Auth context: Login as test user 500 Error.")
      }
      
   }
   catch(error) { 
    console.log("Auth Context error:",error);
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