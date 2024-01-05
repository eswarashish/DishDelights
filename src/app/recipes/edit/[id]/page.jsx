
import EditRecipe from "@/components/layouts/editRecipe"

const getTopicByID = async(id)=>{
  const apiUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}/api/recipes/${id}`
  : `http://localhost:3000/api/recipes/${id}`;

    try {
      const res =await fetch(apiUrl,{
        cache:"no-store",
      })
      if(!res.status==201){
      throw new Error("Unable to connect")
      }
      return res.json();
    } catch (error) {
      console.log(error);
    }}
export default async function EditTopic({params}){
    const {id}  = params
    const {recipe} = await getTopicByID(id);

    return(<EditRecipe id={id} title={recipe.title} overview={recipe.overview}  desc={recipe.description}  />)
}