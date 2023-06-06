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
import { ErrorProvider } from "./context-APIErrorManagement/error-context";
import { LogoutProvider } from "./context/logout-context";
import { ToastProvider } from "./context/toast-context";
import { SearchProvider } from "./context/search-context";
import { FilterProvider } from "./context/filter-context";
import { AddressProvider } from "./context/address-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter> 

    <ErrorProvider>

    <ToastProvider>
      
    <AuthProvider>
    <DataProvider> 
    <SearchProvider>
    <FilterProvider>
    
     <AddressProvider> 
    <CartProvider>
    <WishlistProvider>
    <LogoutProvider>
   
    

    <App />
    

    
    </LogoutProvider>
    </WishlistProvider>
    </CartProvider>
    </AddressProvider>
    
    </FilterProvider>
   </SearchProvider>
    </DataProvider>
    </AuthProvider>
   
    </ToastProvider>

    </ErrorProvider>

    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
