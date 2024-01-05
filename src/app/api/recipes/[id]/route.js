
import connectMongoDB from "@/lib/db/mongodb";
import Recipe from "@/lib/db/models/recipe";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
    const { id } = params;
    const {title:  title, overview: overview,description: description } =
      (await request.json()) || {};
    await connectMongoDB();
   console.log('Updating Recipe:', id, { title, overview, description });
    try {
 
      await Recipe.findByIdAndUpdate(id, { title, overview, description });
  
      return NextResponse.json({ message: 'Recipe Updated' }, { status: 200 });
    } catch (error) {
      console.error('Error updating Recipe:', error.message);
      return NextResponse.json({ message: 'Error updating Recipe' }, { status: 500 });
    }
  }


export async function GET(request,{params}){
    const {id}=params;
    await connectMongoDB();
    const recipe = await Recipe.findOne({_id:id});
    return NextResponse.json({recipe},{status:200});
}
export async function DELETE(request,{params}){
  const {id}=params;
  await connectMongoDB();
  await Recipe.findByIdAndDelete(id);
  console.log("deleted");
  return NextResponse.json({message: "Recipe deleted"},{status:200})
}