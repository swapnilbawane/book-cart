import { useErrorContextApp } from "../../context-APIErrorManagement/error-context";

export function ErrorPageCart() { 

   const { error } = useErrorContextApp(); 

    return(
        <h1> {error.cart} </h1> 
    );
}

