import "./Products.css"; 

import { Header } from "../../components/Header";
import { AllProducts } from "./AllProducts";
import { FilterPanel } from "./FilterPanel";

export function Products() { 

return(
<>
<Header />

<div className="pl-cont">
<FilterPanel />           
<AllProducts />
</div> 

</>
); 
}