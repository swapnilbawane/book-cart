import "./Wishlist.css"; 
import { Header } from "../../components/Header";
import { useAuth } from "../../context/auth-context";
import { WishlistComponent } from "./WishlistComponent";

export function Wishlist () { 
   

return (
<>

<Header /> 

<div class="wishlist-cont">

    <h3> My wishlist</h3>
    
    <div class="wishlist-list">
     
     <WishlistComponent />      
     
    </div>

</div>
</>
);
}