import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { makeServer } from "./server";
import { DataProvider } from "./context/data-context";
import { AuthProvider } from "./context/auth-context";
import { CartProvider } from "./context/cart-context";
import { WishlistProvider } from "./context/wishlist-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter> 
    <DataProvider> 
    <AuthProvider>
    <CartProvider>
    <WishlistProvider>

    

    <App />

    

    </WishlistProvider>
    </CartProvider>
    </AuthProvider>
    </DataProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
