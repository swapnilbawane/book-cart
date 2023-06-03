import "./Products.css"; 

import { Header } from "../../components/Header";
import { AllProducts } from "./AllProducts";
import { FilterPanel } from "./FilterPanel";
import { useErrorContextApp } from "../../context-APIErrorManagement/error-context";
import { ErrorPageProducts } from "./ErrorPageProducts";

export function Products() { 

const { error } = useErrorContextApp();     

return(
    
<>
<Header />

{
error.products===""
? 
<div className="pl-cont">
<FilterPanel />           
<AllProducts />
</div>
: 
<ErrorPageProducts />
} 

</>

); 
}