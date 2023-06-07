import { useAuth } from "../../context/auth-context";
import { useAddress } from "../../context/address-context";
import { ProfileHeader } from "./ProfileHeader";
import "./User.css"; 

export function Address() { 

    const { userDetails} = useAuth(); 
    const { addresses } = useAddress(); 
    console.log("address",addresses);

    return(
        <> 
        <ProfileHeader /> 

        <div className="user-details"> 
        <p> <b className="strong"> Address </b>  </p>
        { 
        addresses.map((item,index)=> { 
            return (
                <div key={index} className="address-single">
                <p> { item.buildingName }, {item.flatNumber}  </p>
                
                <p> {item.locality},  {item.area} </p>
             
                <p> {item.city} </p>
                <p> Pincode: {item.pinCode} </p>
                </div>
            ); 
        })
        }

        {/* <button className="button-address"> Add Address </button> 
        <button className="button-deleteadd"> Delete Address </button> */}
        
        </div>
        </>
    ); 
}