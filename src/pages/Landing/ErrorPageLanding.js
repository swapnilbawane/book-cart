import { useErrorContextApp } from "../../context-APIErrorManagement/error-context";

export function ErrorPageLanding() { 

  const { error } = useErrorContextApp();

    return(
        <h1> {error.category} </h1>
    );
}