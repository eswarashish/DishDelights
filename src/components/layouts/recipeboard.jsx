// // components/ServerComponent.js
 // Import your MongoDB model
"use client"
import {useState,useEffect} from "react"
import RecipeCard from "./recipecard";
import DRecipeCard from "./defaultcard";
const Defaultvaues  = [  {
  title: "Butter Chicken",
  overview: "A creamy and flavorful North Indian dish with tender chicken pieces.",
  description: "Classic Butter Chicken, also known as Murgh Makhani, is a popular Indian dish known for its rich and creamy tomato-based curry. The tender chicken pieces are marinated in a mix of yogurt and spices, then cooked in a buttery tomato sauce. Serve with naan or rice for a delightful meal.",
  username: "Admin",
  useremail: "Ashish as Admin",
},
{
  title: "Paneer Tikka",
  overview: "A popular vegetarian appetizer featuring marinated and grilled paneer cubes.",
  description: "Paneer Tikka is a flavorful Indian dish where cubes of paneer (Indian cottage cheese) are marinated in a spiced yogurt mixture and grilled to perfection. Served with mint chutney, this appetizer is a favorite among vegetarians and meat lovers alike.",
  username: "Admin",
  useremail: "Ashish as Admin",
},
{
  title: "Chole Bhature",
  overview: "A classic North Indian dish featuring spicy chickpeas served with fried bread.",
  description: "Chole Bhature is a popular North Indian dish that consists of spicy chickpeas (chole) cooked in a flavorful tomato-based curry. It is typically served with bhature, which are deep-fried bread. This hearty and satisfying dish is a favorite street food in India.",
  username: "Admin",
  useremail: "Ashish as Admin",
},
{
  title: "Biryani",
  overview: "A fragrant and flavorful rice dish with aromatic spices and tender meat or vegetables.",
  description: "Biryani is a classic Indian dish made with fragrant basmati rice, aromatic spices, and a choice of meat or vegetables. The layers of rice and meat or vegetables are slow-cooked to perfection, creating a delicious one-pot meal. Serve with raita for an authentic experience.",
  username: "Admin",
  useremail: "Ashish as Admin",
},
{
  title: "Masala Dosa",
  overview: "A South Indian delight featuring a crispy fermented rice crepe filled with spiced potatoes.",
  description: "Masala Dosa is a popular South Indian dish that consists of a thin, crispy fermented rice crepe filled with a spiced potato mixture. It is typically served with coconut chutney and tangy sambar. Enjoy this flavorful and satisfying dish for breakfast or any time of the day.",
  username: "Admin",
  useremail: "Ashish as Admin",
},
{
  title: "Palak Paneer",
  overview: "A nutritious and vibrant dish with paneer cubes in a creamy spinach sauce.",
  description: "Palak Paneer is a nutritious and vibrant North Indian dish where paneer cubes are simmered in a creamy spinach sauce. The combination of protein-packed paneer and iron-rich spinach makes this dish not only delicious but also healthy. Serve with naan or rice for a wholesome meal.",
  username: "Admin",
  useremail: "Ashish as Admin",
},
{
  title: "Chicken Tikka Masala",
  overview: "Tender chicken pieces in a rich and flavorful tomato-based curry.",
  description: "Chicken Tikka Masala is a popular Indian dish featuring tender marinated chicken pieces cooked in a rich and flavorful tomato-based curry. The smoky flavor from the grilled chicken and the creamy sauce make this dish a true delight. Pair it with rice or naan for a complete meal.",
  username: "Admin",
  useremail: "Ashish as Admin",
},
{
  title: "Rajma Chawal",
  overview: "A comforting North Indian dish with kidney beans in a spiced tomato-based curry, served with rice.",
  description: "Rajma Chawal is a comforting North Indian dish that consists of kidney beans cooked in a spiced tomato-based curry. It is traditionally served with steamed rice (chawal). The hearty combination of protein-packed rajma and aromatic spices makes this dish a family favorite.",
  username: "Admin",
  useremail: "Ashish as Admin",
},
{
  title: "Aloo Paratha",
  overview: "Delicious stuffed flatbreads with spiced mashed potatoes, cooked on a griddle.",
  description: "Aloo Paratha is a popular North Indian dish where flatbreads are stuffed with a spiced mixture of mashed potatoes and then cooked on a griddle. Served with yogurt or pickles, Aloo Paratha is a wholesome and satisfying meal, perfect for breakfast or lunch.",
  username: "Admin",
  useremail: "Ashish as Admin",
},
{
  title: "Goan Fish Curry",
  overview: "A spicy and tangy coconut-based curry with fresh fish, a specialty of Goan cuisine.",
  description: "Goan Fish Curry is a flavorful and aromatic dish from the coastal region of Goa. The curry is made with a blend of spices, coconut, and tamarind, giving it a spicy and tangy taste. It is traditionally made with fresh fish and served with steamed rice for a delightful coastal dining experience.",
  username: "Admin",
  useremail: "Ashish as Admin",
},];

const ServerComponent = (props) => {
  const {recipes} = props.recipes;
  const [visibleRecipes, setVisibleRecipes] = useState(recipes);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
   
    setVisibleRecipes(recipes);
    
  }, [recipes]);


  const handleSearch = (query) => {
    const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(query.toLowerCase()) ||
    recipe.overview.toLowerCase().includes(query.toLowerCase())
    );
    setVisibleRecipes(filteredRecipes);
    setSearchTerm(query);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
    <div className="search-container mb-8 fixed top-16">
      <input
        type="text"
        placeholder="Search recipes..."
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
        className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
      />
    </div>
    <div className="flex flex-col items-center w-full max-w-6xl">
      {Defaultvaues.map((recipe) => (
        <div key={recipe.title} className="w-full mb-4">
          <DRecipeCard card={recipe} />
        </div>
      ))}
    </div> 
    <div className="flex flex-col items-center w-full max-w-6xl">
      {visibleRecipes.map((recipe) => (
        <div key={recipe._id} className="w-full mb-4">
          <RecipeCard card={recipe} />
        </div>
      ))}
    </div>
  </div>
  

  );
};



export default ServerComponent;
