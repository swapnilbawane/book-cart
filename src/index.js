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
import { ErrorProvider } from "./APIErrorManagement/error-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter> 

    <ErrorProvider>

    <AuthProvider>
    <DataProvider> 
   
    <CartProvider>
    <WishlistProvider>
    

    

    <App />

    
    
    </WishlistProvider>
    </CartProvider>

    </DataProvider>
    </AuthProvider>
   
    </ErrorProvider>

    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
