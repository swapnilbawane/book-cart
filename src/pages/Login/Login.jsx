import { Header } from "../../components/Header";
import { useAuth } from "../../context/auth-context";
import "./Login.css"; 
import { useState } from "react";
import { Link } from "react-router-dom";

export function Login() { 

    const { loginAccount, handleTestUser } = useAuth();

    const [user, setUser] = useState({email: "", password: ""}); 

    const updateUser = (e) => { 
     if(e.target.name==="email") { 
        setUser({...user, email: e.target.value});
     }

     else if (e.target.name==="password") { 
        setUser({...user, password: e.target.value});
     }
    }

    return(
        <> 
        <Header /> 

        <div className="login-cont"> 
        <div className="login-card">

            <h3> Login </h3>

            <div className="login-input">
                <label> <b> Email Address </b></label>     
                <input type="text" 
                name="email" 
                placeholder="adarshbalika@gmail.com" 
                spellCheck={false} 
                data-ms-editor={true} 
                value={user.email}
                onChange={updateUser}
                />
            </div>

            <div className="login-input">
               <label> <b> Password </b></label>     
               <input 
               type="text" 
               name="password" 
               placeholder="************" 
               spellCheck={false} 
               data-ms-editor={true} 
               value={user.password} 
               onChange={updateUser}
               />
            </div>

            {/* <div className="login-forgot-details">
            
              <div className="forgot-password">
              <span> Forgot your Password? </span>   
              </div> 

            </div> */}

            <button 
            className="card-button active-button" 
            onClick={()=> loginAccount(user)}
            > 
            Login 
            </button>

          
            <button className="card-button active-button" 
            onClick={()=> handleTestUser()}
            > 
            Sign in as test user 
            </button>
        


            <Link to="/signup" className="create-new-account">
                Create New Account
                <i className="material-symbols-outlined"> arrow_forward_ios </i>
            </Link>
 

        </div>
    </div>    
    </>
    ); 
}