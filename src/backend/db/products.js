import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [

  { _id: uuid(),
    title: "The Jungle Book",
    author: "Rudyard Kipling",
    price: "200",
    categoryName: "fiction",
    image: "https://res.cloudinary.com/djhnar3ju/image/upload/v1685701282/Book%20Cart/The%20Jungle%20Book.png",
    rating: 4.5 },
    
    
    { _id: uuid(),
    title: "Shantaram",
    author: "Gregory David Roberts",
    price: "390",
    categoryName: "fiction",
    image: "https://res.cloudinary.com/djhnar3ju/image/upload/v1685701282/Book%20Cart/Shantaram.png",
    rating: 4 },
    
    
    { _id: uuid(),
    title: "The White Tiger",
    author: "Arvind Adiga",
    price: "350",
    categoryName: "fiction",
    image: "https://res.cloudinary.com/djhnar3ju/image/upload/v1685701282/Book%20Cart/The%20White%20Tiger.png",
    rating: 4.5 },
    
    
    { _id: uuid(),
    title: "Life of Pi",
    author: "Yann Martel",
    price: "220",
    categoryName: "fiction",
    image: "https://res.cloudinary.com/djhnar3ju/image/upload/v1685701282/Book%20Cart/Life%20of%20Pi.png",
    rating: 5 },
    
    
    { _id: uuid(),
    title: "The Glass Palace",
    author: "Amitav Ghosh",
    price: "200",
    categoryName: "fiction",
    image: "https://res.cloudinary.com/djhnar3ju/image/upload/v1685701282/Book%20Cart/The%20Glass%20Palace.png",
    rating: 4 },
    
    
    { _id: uuid(),
    title: "Maximum City - Bombay Lost and Found",
    author: "Suketu Mehta",
    price: "400",
    categoryName: "non-fiction",
    image: "https://res.cloudinary.com/djhnar3ju/image/upload/v1685701281/Book%20Cart/Maximum%20City.png",
    rating: 4 },
    
    { _id: uuid(),
    title: "The Ocean of Churn: How the Indian Ocean Shaped Human History",
    author: "Sanjeev Sanyal",
    price: "350",
    categoryName: "non-fiction",
    image: "https://res.cloudinary.com/djhnar3ju/image/upload/v1685701281/Book%20Cart/Ocean%20of%20Churn.png",
    rating: 4 },
    
    { _id: uuid(),
    title: "Two Lives",
    author: "Vikram Seth",
    price: "310",
    categoryName: "non-fiction",
    image: "https://res.cloudinary.com/djhnar3ju/image/upload/v1685701281/Book%20Cart/Two%20Lives.png",
    rating: 4.5 },
    
    { _id: uuid(),
    title: "Awakening Bharat Mata: The Political Beliefs of the Indian Right",
    author: "Swapan Dasgupta",
    price: "299",
    categoryName: "non-fiction",
    image: "https://res.cloudinary.com/djhnar3ju/image/upload/v1685701283/Book%20Cart/Awakening%20Bharat%20Mata.png",
    rating: 4.6 },
    
    { _id: uuid(),
    title: "The Man Who Saved India",
    author: "Hindol Sengupta",
    price: "399",
    categoryName: "non-fiction",
    image: "https://res.cloudinary.com/djhnar3ju/image/upload/v1685701281/Book%20Cart/The%20Man%20Who%20Saved%20India.png",
    rating: 4.8 },
     
    { _id: uuid(),
    title: "The Two Towers",
    author: "J R R Tolkien",
    price: "499",
    categoryName: "fantasy",
    image: "https://res.cloudinary.com/djhnar3ju/image/upload/v1685701281/Book%20Cart/The%20Two%20Towers.png",
    rating: 5 },
    
    { _id: uuid(),
    title: "The BFG",
    author: "Roald Dahl",
    price: "225",
    categoryName: "fantasy",
    image: "https://res.cloudinary.com/djhnar3ju/image/upload/v1685701285/Book%20Cart/The%20BFG.png",
    rating: 4.9 },
    
    { _id: uuid(),
    title: "The Song of Achilles",
    author: "Madeline Miller",
    price: "199",
    categoryName: "fantasy",
    image: "https://res.cloudinary.com/djhnar3ju/image/upload/v1685701284/Book%20Cart/The%20Song%20of%20Achilles.png",
    rating: 4.7 },
    
    { _id: uuid(),
    title: "Mary Poppins",
    author: "P.L.Travers",
    price: "200",
    categoryName: "fantasy",
    image: "https://res.cloudinary.com/djhnar3ju/image/upload/v1685701284/Book%20Cart/Mary%20Poppins.png",
    rating: 4.6 },
    
    { _id: uuid(),
    title: "The Fellowship of the Rings",
    author: "J R R Tolkien",
    price: "500",
    categoryName: "fantasy",
    image: "https://res.cloudinary.com/djhnar3ju/image/upload/v1685701284/Book%20Cart/The%20Fellowship%20of%20the%20Ring.png",
    rating: 5 },
    
    { _id: uuid(),
    title: "The Way of Zen",
    author: "Alan W. Watts",
    price: "220",
    categoryName: "self-help",
    image: "https://res.cloudinary.com/djhnar3ju/image/upload/v1685701286/Book%20Cart/The%20Way%20of%20Zen.png",
    rating: 5 },
    
    { _id: uuid(),
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    price: "100",
    categoryName: "self-help",
    image: "https://res.cloudinary.com/djhnar3ju/image/upload/v1685701282/Book%20Cart/Think%20and%20Grow%20Rich.png",
    rating: 4 },
    
    { _id: uuid(),
    title: "The Power of Positive Thinking",
    author: "Norman Vincent Peale",
    price: "180",
    categoryName: "self-help",
    image: "https://res.cloudinary.com/djhnar3ju/image/upload/v1685701284/Book%20Cart/The%20Power%20of%20Positive%20Thinking.png",
    rating: 3 },
    
    { _id: uuid(),
    title: "The Illustrated Tao Te Ching",
    author: "Lao Tzu",
    price: "400",
    categoryName: "self-help",
    image: "https://res.cloudinary.com/djhnar3ju/image/upload/v1685701283/Book%20Cart/Tao%20Te%20Ching%20Illustrated.png",
    rating: 3 },
    
    { _id: uuid(),
    title: "Man's Search for Meaning",
    author: "Viktor E. Frankl",
    price: "150",
    categoryName: "self-help",
    image: "https://res.cloudinary.com/djhnar3ju/image/upload/v1685701283/Book%20Cart/Mans%20Search%20For%20Meaning.png",
    rating: 4 },
    
    { _id: uuid(),
    title: "Steve Jobs",
    author: "Walter Isaacson",
    price: "310",
    categoryName: "biography",
    image: "https://res.cloudinary.com/djhnar3ju/image/upload/v1685701283/Book%20Cart/Steve%20Jobs.png",
    rating: 2 },
    
    { _id: uuid(),
    title: "Einstein: His Life and Universe",
    author: "Walter Isaacson",
    price: "280",
    categoryName: "biography",
    image: "https://res.cloudinary.com/djhnar3ju/image/upload/v1685701283/Book%20Cart/Einstein.png",
    rating: 2 },
    
    { _id: uuid(),
    title: "The King's Speech",
    author: "Mark Logue",
    price: "250",
    categoryName: "biography",
    image: "https://res.cloudinary.com/djhnar3ju/image/upload/v1685701283/Book%20Cart/Kings%20Speech.png",
    rating: 3 },
    
    { _id: uuid(),
    title: "A Beautiful Mind",
    author: "Sylvia Nasar",
    price: "310",
    categoryName: "biography",
    image: "https://res.cloudinary.com/djhnar3ju/image/upload/v1685701283/Book%20Cart/A%20Beautiful%20Mind.png",
    rating: 1 },
    
    { _id: uuid(),
    title: "Tuesdays with Morrie",
    author: "Mitch Albom",
    price: "200",
    categoryName: "biography",
    image: "https://res.cloudinary.com/djhnar3ju/image/upload/v1685701283/Book%20Cart/Tuesdays%20with%20Morrie.png",
    rating: 1 }
    


];
