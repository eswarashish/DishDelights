import Recipe from "@/lib/db/models/recipe";
import connectMongoDB from "@/lib/db/mongodb";
import { NextResponse } from "next/server";

export async function POST(request) {
    const {title,overview,description,username,useremail} =await request.json();
    await connectMongoDB();
    await Recipe.create({title,overview,description,username,useremail});
    return NextResponse.json({message:"Topic Created"},{status:201});
}

export async function GET(){
    await connectMongoDB();
    const recipes = await Recipe.find();
    return NextResponse.json({recipes})
}

