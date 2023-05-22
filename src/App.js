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
import { RequiresAuth } from "./components/RequiresAuth";
import { useAuth } from "./context/auth-context";
import { ProductDetail } from "./pages/Products/ProductDetail";

function App() {
  const { isLoggedIn } = useAuth();
  console.log("is logged in:", isLoggedIn); 
  
  return (
    <div className="App">
    <Routes> 
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} /> 
      <Route path="/product/:_id" element={<ProductDetail /> } />  
      <Route path="/login" element={<Login/> } /> 
      <Route path="/signup" element={<Signup />} /> 


      <Route path="/cart" element={
    
    
      <Cart /> 
     
      
      } />


      <Route path="/wishlist" element={
     
     <Wishlist />
    
      } /> 

      <Route path="/mockman" element={<Mockman />} /> 
      </Routes>  
    </div>
  );
}

export default App;
