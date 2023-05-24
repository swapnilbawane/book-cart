import { useData } from "../../context/data-context";
import { CartCard } from "./CartCard";

export function CartComponent() {
    const apiData = useData(); 
   
    // console.log(apiData.cartData.cart)

   return(
    <>

    { 
    apiData?.cartData?.cart?.map((item,index)=> { 
        return(
            <div key={item._id+index}>
                    <CartCard {...item} />
            </div>
        );
    })
    }
   
    </> 
   );  
}