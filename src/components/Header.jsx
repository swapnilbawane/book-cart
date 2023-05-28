import "./Header.css"; 
import { useAuth } from "../context/auth-context";
import { useCart } from "../context/cart-context";
import { useWishlist } from "../context/wishlist-context";
import { Link } from "react-router-dom"; 

export function Header() {

  const {isLoggedIn, handleWishlist, handleCart, handleLogout} = useAuth(); 

  const { totalQuantity} = useCart(); 
  const { wishlistQuantity } = useWishlist(); 

  
  return (
    <>
      <div className="header-cont">
        <h3>
        <Link to="/" className="brand-name"> MyShopping Site </Link>
        </h3>

        <div className="header-search">
          <i className="material-symbols-outlined" id="search"> search </i>
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
            <label> Cart </label>
          </Link>

        </div>
      </div>
    </>
  );
}
