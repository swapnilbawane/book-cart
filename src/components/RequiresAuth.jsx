import { useAuth } from "../context/auth-context";
import{ Navigate, useLocation } from "react-router-dom"; 

export function RequiresAuth({children}) { 
const { isLoggedIn } = useAuth(); 
const location = useLocation();
console.log("login:", isLoggedIn);

return (
    isLoggedIn ? children : <Navigate to="/login" state={{from: location}}/>
);
}