import { createContext, useContext } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ToastContext = createContext(); 

export function ToastProvider({children}) { 

    const showLoggedInToastMessage = () => { 
        toast.success('Logged in !', {
        position: toast.POSITION.TOP_RIGHT
    });
    }
  
  const emailNotFoundToastMessage = () => { 
      toast.warning('The email you entered is not Registered. Signup today!', {
      position: toast.POSITION.TOP_RIGHT
  });
  }
  
  const passwordWrongToastMessage = () => { 
    toast.error('The credentials you entered are invalid.', {
    position: toast.POSITION.TOP_RIGHT
  });
  }
  
  const emailExistsToastMessage = () => { 
    toast.warning('This email already exists.. Login today!', {
    position: toast.POSITION.TOP_RIGHT
  });
  }



    return(
         <ToastContext.Provider value={{ showLoggedInToastMessage, emailNotFoundToastMessage, passwordWrongToastMessage,emailExistsToastMessage }}>
            {children}
         </ToastContext.Provider>
    );
}

export const useToast = () => useContext(ToastContext);