import { useErrorContextApp } from "../../context-APIErrorManagement/error-context";

export function ErrorPageProducts() {
    
    const { error } = useErrorContextApp();

    return(
        <h1> { error.products} </h1>
    );
}