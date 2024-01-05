export default async function Adddata({title, overview,description,username,useremail}) {
    // Fetch data from your API endpoint
    const apiUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}/api/recipes`
    : `http://localhost:3000/api/recipes`
    const response = await fetch(apiUrl,{
        method:"POST",
        headers:{
            "Content-type":"application/json",
        },
        body: JSON.stringify({title, overview, description, username, useremail})
    });
    const recipes = await response.json();
  
    return recipes;
  }