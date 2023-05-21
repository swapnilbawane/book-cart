import { Header } from "../../components/Header";
import { useAuth } from "../../context/auth-context";
import {useLocation, useNavigate} from "react-router-dom";
import "./Login.css"; 

export function Login() { 

    const {handleLogin } = useAuth();
    const location = useLocation(); 
    const navigate = useNavigate();

    const LoginTestUser = () => { 
        handleLogin();
        navigate(location?.state?.from?.pathname);
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
                <input type="text" placeholder="adarshbalika@gmail.com" spellCheck={false} data-ms-editor={true}/>
            </div>

            <div className="login-input">
               <label> <b> Password </b></label>     
               <input type="text" placeholder="************" spellCheck={false} data-ms-editor={true}/>
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

            <button className="card-button active-button"> Login </button>

            <a href="/signup" className="create-new-account">
                Create New Account
                <i className="material-symbols-outlined"> arrow_forward_ios </i>
            </a>
 
           
            <button className="card-button active-button" 
            onClick={()=> LoginTestUser()}> 
            Sign in as test user 
            </button>

        </div>
    </div>    
        </>
    ); 
}