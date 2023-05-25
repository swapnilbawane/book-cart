import "./Header.css"; 
import { useAuth } from "../context/auth-context";

export function Header() {

  const {isLoggedIn, handleLogout, handleLogin} = useAuth(); 


  console.log("login status", isLoggedIn);

  

  return (
    <>
      <div className="header-cont">
        <h3>
          <a className="brand-name" href="/">
            MyShopping Site
          </a>
        </h3>

        <div className="header-search">
          <i className="material-symbols-outlined"> search </i>
          <input
            type="text"
            placeholder="Search"
            className="search-txt"
            spellCheck="false"
            data-ms-editor="true"
          />
        </div>

        <div className="header-profile">

          { isLoggedIn 
          ? <a className="login-button" href="/products" onClick={handleLogout}> Logout </a> 
          :  <a className="login-button" href="/login" onClick={handleLogin}> Login </a>
          }

          <a className="header-badge" href="/wishlist">
            <div> 0 </div>
            <i className="material-symbols-outlined">favorite</i>
          </a>

          <a className="header-cart" href="/cart">
            <div className="header-badge">
              <div> 0 </div>
              <i className="material-symbols-outlined" id="shopping-cart">
                shopping_cart
              </i>
            </div>
            <label> Cart </label>
          </a>
        </div>
      </div>
    </>
  );
}
