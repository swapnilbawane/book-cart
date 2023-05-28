import "./Wishlist.css"; 
import { useData } from "../../context/data-context";
import { WishlistCard } from "./WishlistCard";
import { LoadingWishlist } from "./LoadingWishlist";

export function WishlistComponent() { 

    const { apiData } = useData(); 

    return(         
            <div className="wishlist-component">

           {     
            apiData?.wishlistData ? 
           <>
           {
            apiData?.wishlistData?.map((item,index) => {
                return (
                    <div key={item._id+index}>
                         <WishlistCard {...item} />    
                    </div>
                );
            })
    
            }
            </>
            : <LoadingWishlist />
            }
            </div>    

        
    ); 
}