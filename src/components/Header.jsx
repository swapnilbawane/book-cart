import "./Header.css"; 
import { useAuth } from "../context/auth-context";
import { useCart } from "../context/cart-context";
import { useWishlist } from "../context/wishlist-context";
import { Link, Navigate, useNavigate } from "react-router-dom"; 
import { useLogout } from "../context/logout-context";
import { useState } from "react";
import { useData } from "../context/data-context";
import { useSearch } from "../context/search-context";

export function Header() {

  const navigate = useNavigate(); 

  const { apiData} = useData(); 
  const { searchHandler } = useSearch(); 

  const {isLoggedIn } = useAuth(); 
  const { handleLogout} = useLogout(); 

  const [ search, setSearch ] = useState("");

  const { totalQuantity} = useCart(); 
  const { wishlistQuantity } = useWishlist(); 

 
  
  return (
    <>
      <div className="header-cont">
        <h3>
        <Link to="/" className="brand-name"> Book-Cart </Link>
        
        </h3>

        <div className="header-search">
          <i className="material-symbols-outlined" id="search"> search </i>
          <input

            type="text"
            placeholder="Search"
            className="search-txt"
            spellCheck="false"
            data-ms-editor="true"
            value={search}
            onFocus={()=> navigate('/search')}
            onChange={(event)=> searchHandler(event, search, setSearch)}
          />
        </div>

        <div className="header-profile">

        { isLoggedIn 
        ? 
        <Link to="/profile"> 
           <i className="material-symbols-outlined" id="user-profile">account_circle</i> 
        </Link>
        : 
        <Link to="/profile"> 
          <i className="material-symbols-outlined" id="no-login" > account_circle </i> 
        </Link>
        }

          { isLoggedIn 
          ? <Link to="/products" className="login-button" onClick={handleLogout}> Logout </Link>  
          :  <Link to="/login" className="login-button"> Login </Link>
          }

            <Link to="/wishlist" className="header-badge"> 
            <div> {wishlistQuantity} </div>
            <i className="material-symbols-outlined" id="fav">favorite</i>
            </Link>

            <Link to="/cart" className="header-cart"> 
            <div className="header-badge">
              <div> {totalQuantity} </div>
              <i className="material-symbols-outlined" id="shopping-cart">
                shopping_cart
              </i>
            </div>
            
          </Link>

        </div>
      </div>
    </>
  );
}
