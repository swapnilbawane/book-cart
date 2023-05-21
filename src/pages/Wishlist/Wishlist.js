import "./Wishlist.css"; 
import { Header } from "../../components/Header";

export function Wishlist () { 
    return (
        <>
        <Header /> 

        <div class="wishlist-cont">

    <h3> My wishlist</h3>
    
    <div class="wishlist-list">

        <div class="card-cont">
            <div class="card-img">
                <div class="card-badge">
                 <i class="red-fav material-symbols-outlined"> favorite </i>
                </div>
                <img src="https://fastly.picsum.photos/id/807/200/200.jpg?hmac=Y8gayvNItiQYxP_Pd-2un9GH09XuyJdIZOQPw6K9QsI" alt="cards"/>
            </div>

            <div class="card-details">
                <div> Men Premium Jacket </div>
                <b> Rs. 2000 </b>
            </div>

            <button class="card-button"> Add To Cart </button>
        </div>
   
        <div class="card-cont">
            <div class="card-img">
                <div class="card-badge">
                 <i class="red-fav material-symbols-outlined"> favorite </i>
                </div>
                <img src="https://fastly.picsum.photos/id/807/200/200.jpg?hmac=Y8gayvNItiQYxP_Pd-2un9GH09XuyJdIZOQPw6K9QsI" alt="cards"/>
            </div>

            <div class="card-details">
                <div> Men Premium Jacket </div>
                <b> Rs. 2000 </b>
            </div>

            <button class="card-button"> Add To Cart </button>
        </div>

    </div>

    </div>
        </>
    );
}