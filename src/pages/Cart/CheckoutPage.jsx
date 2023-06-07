import { useCart } from "../../context/cart-context";
import { useData } from "../../context/data-context";
import { Header } from "../../components/Header";
import { useAddress } from "../../context/address-context";
import "./Cart.css";
import { useAuth } from "../../context/auth-context";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


export function CheckoutPage() { 

    const { apiData }= useData(); 
    const { userDetails } = useAuth(); 
    const [checkoutAddress, setCheckoutAddress] = useState([]); 
    const [ radioValue, setRadioValue] = useState(false);
 
    const { totalPrice, discount, deliveryCharges, totalQuantity} = useCart();
    const { addresses } = useAddress();


    const radioEffect = (event,item) => { 
    console.log("item 2",event.target.checked);
    setRadioValue(event.target.checked);
    setCheckoutAddress(item);
    }

    return(
        <> 
        <Header /> 
       
        <div className="order-container"> 

        <h1> Checkout Page </h1>  
  
        <div class="order-details"> 
        
        <div className="address-card"> 
        <p> <b> Items will be delivered to this address: </b> </p>
        <p> Name: {userDetails.firstName} {userDetails.lastName} </p>

        { 
        addresses.map((item,index)=> { 
            return (
                <div key={index} className="address-single-checkout">
                <label htmlFor="address"> 

                <input 
                key={index}
                type="radio" 
                name="address" 
                className="checkout-address" 
                checked={radioValue}
                onChange={(event)=>radioEffect(event,item)}
                /> 
                <span> { item.buildingName }, {item.flatNumber}; {item.locality},  {item.area},  {item.city}, Pincode: {item.pinCode} </span> 
                
                </label>
                </div>
            ); 
        })
        }
       
        </div>

        <div className="cart-card"> 
        <p> <b> List of items to be delivered: </b> </p>
        { 
        apiData.cartData.map((item)=> { 
            return(
                <div key={item._id}> 
                <p> {item.title} </p>
                </div>
            ); 
        })
        }
         <p> <b> Total items ordered: </b> {totalQuantity} </p>
         <p> <b> Total Cart Price:</b> Rs.{totalPrice-discount+deliveryCharges} </p>
         <p> Checkout Address: </p>
         { 
         Array.from(checkoutAddress).map((item)=> { 
            return(<> {item} ,  </>);
         })
         }
        </div>
            
        </div> 
        <Link to="/ordersummary"> Proceed to buy and view order summary </Link>
    
        </div>
        </> 
    ); 
}