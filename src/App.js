import "./App.css";
import React from "react"; 
import { Routes, Route, Link } from "react-router-dom"; 
import Mockman from "mockman-js";

import { Login } from "./pages/Login/Login.js";
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

      {/* // protected routes */}

      <Route path="/cart" element={
    
     <RequiresAuth> 
      <Cart /> 
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
