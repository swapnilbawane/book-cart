import "./Wishlist.css"; 
import { Header } from "../../components/Header";
import { useAuth } from "../../context/auth-context";
import { WishlistComponent } from "./WishlistComponent";
import { useData } from "../../context/data-context";

export function Wishlist () { 
   
const { apiData } = useData(); 

return (
<>

<Header /> 

<div class="wishlist-cont">

    <h3> My wishlist</h3>
    
    <div class="wishlist-list">
    { 

     apiData.wishlistData.length>0 
     ? 
     <WishlistComponent />
     : 
     <h1> Your wishlist is empty. </h1> 
           
     }
    </div>

</div>
</>
);
}