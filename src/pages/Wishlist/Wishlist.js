import "./Wishlist.css"; 
import { Header } from "../../components/Header";
import { WishlistComponent } from "./WishlistComponent";
import { useData } from "../../context/data-context";
import { EmptyWishlist } from "./EmptyWishlist";
import { useErrorContextApp } from "../../context-APIErrorManagement/error-context";
import { ErrorPageWishlist } from "./ErrorPageWishlist";

export function Wishlist () { 
   
const { apiData } = useData();
const { error } = useErrorContextApp();  

return (
<>

<Header /> 
{
error.wishlist===""
? 
<div className="wishlist-cont">

<h3> My wishlist</h3>

<div className="wishlist-list">
{ 
 apiData.wishlistData.length>0 
 ? 
 <WishlistComponent />
 : 
 <EmptyWishlist />        
 }
</div>

</div>
: 
<ErrorPageWishlist />  
}

</>

);
}