import mongoose,{Schema} from "mongoose";

const recipeSchema = new Schema({
    title: String,
    overview: String,
    description: String,
    username: String,
    useremail: String
},
{
    timestamps:true
})

const Recipe = mongoose.models.Recipe ||mongoose.model("Recipe",recipeSchema);

export default Recipe;