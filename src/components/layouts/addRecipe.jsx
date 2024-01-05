
"use client"
import React from 'react'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { useSession } from "next-auth/react"
import { Suspense } from 'react'
import Adddata from '@/lib/server/adddata'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
const AddRecipe = () => {
 
  const { data: session, status, update } = useSession()
  const[title,setTitle] =useState("");
  
  const[overview,setView]=useState("");
  const [description,setDesc]=useState("");
  const username = session?.user.name;
  const useremail =session?.user.email;
  const router = useRouter();
  const handleSubmit = async (e)=>{
e.preventDefault();
if(!title||!description||!overview){
  alert("All three are required");
  return;
}
try{
  const res = await Adddata({title,overview,description,username,useremail});
  
  if(res.status==201){
    alert("Done")
  }else{
    throw new Error("failed to create the recipe")
  }
}catch(error){
console.log(error);
}
router.push("/recipes")
  }
  return (<Suspense><form onSubmit={handleSubmit}>
    <div className="grid lg:px-32  items-center place-self-center gap-2  h-full ">
    <div className='py-20'><Input className=" text-2xl" placeholder="Title"  onChange={(e)=>setTitle(e.target.value)} value={title}></Input></div>
    <div className=''><Textarea placeholder="Overview." className="resize-none text-1xl"  maxLength={500}  onChange={(e)=>setView(e.target.value)} value={overview}/></div>
    <div className='py-20'><Textarea placeholder="Description" className="resize-none h-96"  onChange={(e)=>setDesc(e.target.value)} value={description}/></div>
    <Button type="submit" className="justify-self-center">Add recipe</Button>
  </div></form></Suspense>
  )
}

export default AddRecipe