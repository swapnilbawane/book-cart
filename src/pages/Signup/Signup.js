import { Header } from "../../components/Header";

export function Signup() {
    return (
        <>
        <Header /> 
        <div class="login-cont"> 
        <div class="login-card">

            <h3> Signup </h3>

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
                <input type="checkbox" />
                <label> I accept all Terms & Conditions </label>
              </div>


            </div>

            <button class="card-button active-button"> Create New Account </button>

            <a href="/signup" class="create-new-account">
                Already have an account
                <i class="material-symbols-outlined"> arrow_forward_ios </i>
            </a>
        </div>
    </div> 
        </>
    ); 
}