import { Header } from "../../components/Header";
import "./Login.css"; 

export function Login() { 
    return(
        <> 
        <h1> Login Page. </h1>
        <Header /> 

        <div class="login-cont"> 
        <div class="login-card">

            <h3> Login </h3>

            <div class="login-input">
                <label> <b> Email Address </b></label>     
                <input type="text" placeholder="adarshbalika@gmail.com" spellcheck="false" data-ms-editor="true"/>
            </div>

            <div class="login-input">
               <label> <b> Password </b></label>     
               <input type="text" placeholder="************" spellcheck="false" data-ms-editor="true"/>
            </div>

            <div class="login-forgot-details">
              <div class="remember-me"> 
                <input type="checkbox"/>
                <label> Remember Me</label>
              </div>


              <div class="forgot-password">
              Forgot your Password?   
              </div>  
            </div>

            <button class="card-button active-button"> Login </button>

            <a href="/signup" class="create-new-account">
                Create New Account
                <i class="material-symbols-outlined"> arrow_forward_ios </i>
            </a>
        </div>
    </div>    
        </>
    ); 
}