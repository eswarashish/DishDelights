export default async function Dataserver() {
  
  let recipes=[]
    try {
      const apiUrl = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}/api/recipes`
      : `http://localhost:3000/api/recipes`
      const response = await fetch(apiUrl,{method:"GET"});
      
      
       recipes = await response.json();
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }// Fetch data from your API endpoint
   
    return recipes;
   
  }