import Recipe from "@/lib/db/models/recipe";
import connectMongoDB from "@/lib/db/mongodb";
import { NextResponse } from "next/server";

export async function GET(request, {params} ) {

    const { id } = params;

  await connectMongoDB();
  
const recipes = await Recipe.find({ useremail:id });
  return NextResponse.json({ recipes }, { status: 200 });
}