import "./Wishlist.css"; 
import { useData } from "../../context/data-context";
import { WishlistCard } from "./WishlistCard";


export function WishlistComponent() { 

    const { apiData } = useData(); 

    console.log("wishlist component apiData:", apiData);
    console.log("wishlist component cartData: ", apiData.wishlistData);


    return(

        <div class="wishlist-component">
        {
        apiData?.wishlistData?.wishlist?.map((item,index) => {
            return (
                <div key={item._id+index}>
                     <WishlistCard {...item} />    
                </div>
            );
        })

        }
        </div>
    ); 
}