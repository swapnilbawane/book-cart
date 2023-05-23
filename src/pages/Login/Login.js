import { Header } from "../../components/Header";
import { useAuth } from "../../context/auth-context";
import "./Login.css"; 
import { useState } from "react";



export function Login() { 

    const { LoginAccount } = useAuth();

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
        <h1> Login Page. </h1>
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

            <div className="login-forgot-details">
              <div className="remember-me"> 
                <input type="checkbox"/>
                <label> Remember Me</label>
              </div>


              <div className="forgot-password">
              Forgot your Password?   
              </div>  
            </div>

            <button className="card-button active-button" onClick={()=> LoginAccount(user)}> Login </button>

            <a href="/signup" className="create-new-account">
                Create New Account
                <i className="material-symbols-outlined"> arrow_forward_ios </i>
            </a>
 
           
            <button className="card-button active-button" 
            onClick={console.log("clicked")}> 
            Sign in as test user 
            </button>

        </div>
    </div>    
        </>
    ); 
}