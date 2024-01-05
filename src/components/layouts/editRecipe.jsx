"use client"

import React, { Suspense, useState } from 'react'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'



const EditRecipe =  (props) => {
const [ntitle,setTitle] = useState(props.title);
const [nview,setVniew] = useState(props.overview);
const [ndesc,setDnesc] = useState(props.desc);
const router = useRouter();
const handleSumbit = async(e)=>{
    e.preventDefault();
    try {
      const apiUrl = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}/api/recipes/${id}`
      : `http://localhost:3000/api/recipes/${props.id}`
      const res =await fetch(apiUrl,{
        method:"PUT",
        headers:{
          "Content-type": "application/json",
        },
        body: JSON.stringify({title: ntitle,overview: nview,description: ndesc}),
      });
      if(res.status===200){
     router.push("/recipes");
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Suspense><form onSubmit={handleSumbit}>
    <div className="grid lg:px-32  items-center place-self-center gap-2  h-full ">
    <div className='py-20'><Input className=" text-2xl" placeholder="Title" onChange={(e)=>{setTitle(e.target.value)}} value={ntitle}></Input></div>
    <div className=''><Textarea placeholder="Overview." className="resize-none text-1xl"  maxLength={500} onChange={(e)=>{setVniew(e.target.value)}} value={nview}/></div>
    <div className='py-20'><Textarea placeholder="Description" className="resize-none h-96" onChange={(e)=>{setDnesc(e.target.value)}} value={ndesc}/></div>
    <Button type="submit" className="justify-self-center">Update recipe</Button>
  </div></form></Suspense>
  )
}

export default EditRecipe