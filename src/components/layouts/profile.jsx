// // components/ServerComponent.js
 // Import your MongoDB model
 "use client"
 import {useState,useEffect} from "react"
 import RecipeCard from "./recipecard";
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
      <h3>Profile View</h3>
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
 