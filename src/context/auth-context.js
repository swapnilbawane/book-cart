
import { useContext, useState, createContext } from "react";
import {useNavigate} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AuthContext = createContext();

export function AuthProvider({children}) { 

  const navigate = useNavigate(); 

  const showToastMessage = () => { 
      toast.success('Logged in !', {
      position: toast.POSITION.TOP_RIGHT
  });
  }

   const LoginAccount = async (user) => { 
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

         navigate('/products');



      }
      catch(error) { 

      }
   }




    return(
      <AuthContext.Provider value={{LoginAccount}}>
        {children}
      </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);