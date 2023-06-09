import "./App.css";
import React from "react"; 
import { Routes, Route, Link } from "react-router-dom"; 
import Mockman from "mockman-js";

import { Login } from "./pages/Login/Login";
import { Signup } from "./pages/Signup/Signup";
import { Home } from "./pages/Home/Home";
import { Cart } from "./pages/Cart/Cart";
import { Wishlist } from "./pages/Wishlist/Wishlist";
import { Products } from "./pages/Products/Products";
import { Search } from "./pages/Search/Search";

import { RequiresAuth } from "./components/RequiresAuth";
import { useAuth } from "./context/auth-context";

import { ProductDetail } from "./pages/Products/ProductDetail";
import { CategoryDetail } from "./pages/Landing/CategoryDetail";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Testing } from "./pages/Products/Testing";
import { UserProfile } from "./pages/User/UserProfile";
import { AddressProfile } from "./pages/User/AddressProfile";
import { OrderSummary } from "./pages/Cart/OrderSummary";
import { CheckoutPage } from "./pages/Cart/CheckoutPage";

function App() {

  
  return (
    <div className="App">
    <Routes> 
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} /> 
      <Route path="/products" element={<Products />} /> 
      <Route path="/product/:_id" element={<ProductDetail /> } />  
      <Route path="/category/:_id" element={<CategoryDetail />} /> 
      <Route path="/login" element={<Login/> } /> 
      <Route path="/signup" element={<Signup />} /> 
      <Route path="/testing" element={<Testing />} /> 

      {/* // protected routes */}

      <Route path="/profile" element={
      <RequiresAuth> 
      <UserProfile />
      </RequiresAuth>
      } /> 

<Route path="/address" element={
      <RequiresAuth> 
      <AddressProfile />
      </RequiresAuth>
      } /> 

      <Route path="/cart" element={
    
     <RequiresAuth> 
      <Cart /> 
      </RequiresAuth>
      
      } />

    <Route path="/ordersummary" element={
    
    <RequiresAuth> 
     <OrderSummary /> 
     </RequiresAuth>
     
     } />

  <Route path="/checkout" element={
    
    <RequiresAuth> 
     <CheckoutPage /> 
     </RequiresAuth>
     
     } />

    <Route path="/wishlist" element={

     <RequiresAuth> 
     <Wishlist />
     </RequiresAuth>
     
    } /> 

    <Route path="/mockman" element={<Mockman />} /> 
    
    </Routes> 

    <ToastContainer />

    </div>
  );
}

export default App;
