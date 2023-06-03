import { useErrorContextApp } from "../../context-APIErrorManagement/error-context";

export function ErrorPageWishlist() {

    const { error } = useErrorContextApp();

    return(
        <h1> {error.wishlist} </h1>  
    );
}