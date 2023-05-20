import "./Header.css"; 

export function Header() {
  return (
    <>
      <div class="header-cont">
        <h3>
          <a class="brand-name" href="/">
            MyShopping Site
          </a>
        </h3>

        <div class="header-search">
          <i class="material-symbols-outlined"> search </i>
          <input
            type="text"
            placeholder="Search"
            class="search-txt"
            spellcheck="false"
            data-ms-editor="true"
          />
        </div>

        <div class="header-profile">
          <a class="login-button" href="/login">
            Login
          </a>

          <a class="header-badge" href="/wishlist">
            <div> 0 </div>
            <i class="material-symbols-outlined">favorite</i>
          </a>

          <a class="header-cart" href="/cart">
            <div class="header-badge">
              <div> 0 </div>
              <i class="material-symbols-outlined" id="shopping-cart">
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
