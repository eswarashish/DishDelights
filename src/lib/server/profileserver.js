export default async function ProfileServer(id) {
  
    let recipes=[]
      try {

        const str = process.env.VERCEL_URL
? `https://${process.env.VERCEL_URL}/api/recipes/profile/${id}`
: `http://localhost:3000/api/recipes/profile/${id}`;
        const response = await fetch(str,{method:"GET"});
        
        
         recipes = await response.json();
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }// Fetch data from your API endpoint
     
      return recipes;
     
    }

      