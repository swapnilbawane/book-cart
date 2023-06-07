import { Header } from "../../components/Header";
import { useAuth } from "../../context/auth-context";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Signup() {
    
    const { handleTestUser, signUpAccount } = useAuth();
    
    const [newUser, setNewUser] = useState( 
        { email: "", password: "", firstName: "", lastName: "", confirmPassword:"", protectedPassword:"", protectedConfirmPassword:""  }
    );

    const [ toggle, setToggle ] = useState({  
        password: true,  
        confirmPassword: false  
        }) 
    
    const updateNewUser = (e) => { 
        if(e.target.name==="first-name") { 
           setNewUser({...newUser, firstName: e.target.value});
        }
   
        else if (e.target.name==="last-name") { 
           setNewUser({...newUser, lastName: e.target.value});
        }

        else if (e.target.name==="email") { 
            setNewUser({...newUser, email: e.target.value});
         }

         else if (e.target.name==="password") { 

            const protectedPasswordFirst = Array.from(e.target.value).map((item)=> '*').join("");
            setNewUser({...newUser, password: e.target.value, protectedPassword:protectedPasswordFirst });
         }

         else if (e.target.name==="confirm-password") { 
            const protectedPasswordSecond = Array.from(e.target.value).map((item)=> '*').join("");
            console.log("target value",e.target.value,"protected",protectedPasswordSecond);
            setNewUser({...newUser, confirmPassword: e.target.value, protectedConfirmPassword: protectedPasswordSecond });
         }
       }


    return (
        <>
        <Header /> 
        <div className="login-cont"> 
        <div className="login-card">

            <h3> Signup </h3>
            <div className="login-input">
                <label> <b> First name: </b></label>     
                <input 
                type="text"
                name="first-name" 
                placeholder="Adarsh" 
                spellCheck={false} 
                data-ms-editor={true}
                value={newUser.firstName}
                onChange={updateNewUser}
                />
            </div>
  
            <div className="login-input">
                <label> <b> Last name: </b></label>     
                <input 
                type="text"
                name="last-name" 
                placeholder="Balika" 
                spellCheck={false} 
                data-ms-editor={true}
                value={newUser.lastName}
                onChange={updateNewUser}
                />
            </div>


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
               value={toggle ? newUser.password : newUser.protectedPassword}
               onChange={updateNewUser}
               />
            </div>

            <div className="login-input">
               <label> <b> Confirm Password </b></label>     
               <input 
               type="text" 
               name="confirm-password"
               placeholder="************" 
               spellCheck="false" 
               data-ms-editor="true"
               value={toggle ? newUser.confirmPassword : newUser.protectedConfirmPassword}
               onChange={updateNewUser}
               />
            </div>

            <div className="showHidePassword" 
            onClick={()=>setToggle(!toggle)}> { toggle ? <span> Hide Password </span> : <span> Show Password </span>  }  
            </div>

        
           { 
           newUser.password.length > 0 && newUser.password === newUser.confirmPassword 
           ? 
           <p> Passwords match. </p> 
           : 
           (newUser.password.length > 0 && newUser.password !== newUser.confirmPassword ? <p> Passwords do not match. </p> : null   )

           }


           { 
           newUser.password === newUser.confirmPassword 
           ? 
           <>
            <button 
            className="card-button active-button"
            onClick={()=> signUpAccount(newUser)}
            > 
            Create New Account 
            </button>
           </>
           : 
            null
           }
            

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