import "./Header.css"; 
import { useAuth } from "../context/auth-context";
import { useCart } from "../context/cart-context";
import { useWishlist } from "../context/wishlist-context";

export function Header() {

  const {isLoggedIn, handleLogout, handleLogin, handleWishlist, handleCart, handleHome} = useAuth(); 

  const { totalQuantity} = useCart(); 
  const { wishlistQuantity } = useWishlist(); 

  console.log("login status", isLoggedIn);

  

  return (
    <>
      <div className="header-cont">
        <h3>
          <a className="brand-name" href="/" onClick={handleHome}>
            MyShopping Site
          </a>
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
          ? <a className="login-button" href="/products" onClick={handleLogout}> Logout </a> 
          :  <a className="login-button" href="/login" onClick={handleLogin}> Login </a>
          }

          <a className="header-badge" href="/wishlist"onClick={handleWishlist}>
            <div> {wishlistQuantity} </div>
            <i className="material-symbols-outlined" id="fav">favorite</i>
          </a>

          <a className="header-cart" href="/cart" onClick={handleCart}>
            <div className="header-badge">
              <div> {totalQuantity} </div>
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
