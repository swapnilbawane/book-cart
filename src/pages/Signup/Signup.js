import { Header } from "../../components/Header";
import { useAuth } from "../../context/auth-context";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Signup() {
    
    const { handleTestUser, signUpAccount } = useAuth();
    
    const [newUser, setNewUser] = useState( 
        {email: "", password: ""}
    );
    
    const updateNewUser = (e) => { 
        if(e.target.name==="email") { 
           setNewUser({...newUser, email: e.target.value});
        }
   
        else if (e.target.name==="password") { 
           setNewUser({...newUser, password: e.target.value});
        }
       }


    return (
        <>
        <Header /> 
        <div className="login-cont"> 
        <div className="login-card">

            <h3> Signup </h3>

            <div className="login-input">
                <label> <b> Email Address </b></label>     
                <input 
                type="text"
                name="email" 
                placeholder="adarshbalika@gmail.com" 
                spellCheck={false} 
                data-ms-editor={true}
                value={newUser.email}
                onChange={updateNewUser}
                />
            </div>

            <div className="login-input">
               <label> <b> Password </b></label>     
               <input 
               type="text" 
               name="password"
               placeholder="************" 
               spellCheck="false" 
               data-ms-editor="true"
               value={newUser.password}
               onChange={updateNewUser}
               />
            </div>

            {/* <div className="login-forgot-details">
              <div className="remember-me"> 
                <input type="checkbox" />
                <label> I accept all Terms & Conditions </label>
              </div> */}


            {/* </div> */}

            <button 
            className="card-button active-button"
            onClick={()=> signUpAccount(newUser)}
            > 
            Create New Account 
            </button>

            <button 
            className="card-button active-button" 
            onClick={()=> handleTestUser()}> 
            Sign in as test user 
            </button>

            {/* <Link to="/login" className="create-new-account"> */}
            
            <Link to="/login" className="create-new-account">
                Already have an account
                <i className="material-symbols-outlined"> 
                arrow_forward_ios 
                </i>
            </Link>

            
        </div>
    </div> 
        </>
    ); 
}