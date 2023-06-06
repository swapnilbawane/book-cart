import { createContext, useContext } from "react";

export const AddressContext = createContext(); 

export function AddressProvider({children}) { 
const addresses = [
    {
    buildingName: "Sky Tower",
    flatNumber: "701",
    locality: "Round Road",
    area: "Central Vista",
    city: "Delhi",
    pinCode: "110045"
    }
];

    return(
   <AddressContext.Provider value={{addresses}}> 
    {children}
   </AddressContext.Provider>

    ); 


}

export const useAddress = () => useContext(AddressContext); 