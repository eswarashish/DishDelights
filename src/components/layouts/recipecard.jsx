// "use client"
import { useSession } from "next-auth/react";
import React, { Suspense } from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

export default async function RecipeCard(props) {

  const { data: session, status, update } = useSession();
  const email = session?.user.email;
  const router = useRouter();
  const reloadPage = ()=>{
    
    router.refresh();
  }
  const removeRecipe = async()=>{
    
    const confirmed = confirm("Are you sure to delete");
    if(confirmed){
      const res = await fetch(`http://localhost:3000/api/recipes/${props.card._id}`,{
        method:"DELETE",
      });
        if(res.status==200){
          router.push("/recipes")
        }
        else{
          reloadPage();
        }
    
    }
    
  }
  const isUserRecipe = email === props.card.useremail;
   return(
<div className="flex items-center justify-center">
  <ul role="list" className="w-full max-w-screen-2xl mx-auto divide-y divide-gray-100 hover:bg-slate-300 border-y-2 p-6">
    <li key={props.card._id} className="flex gap-4 py-5">
      <div className="flex flex-col w-1/2">
        <p className="text-2xl font-semibold leading-6 text-gray-900 dark:text-white">{props.card.title}</p>
        <p className="mt-2 text-sm leading-5 text-gray-500 dark:text-white">{props.card.username}</p>
      </div>
      <div className="w-1/2">
        <p className="mt-2 text-sm leading-5 text-gray-500 dark:text-white">{props.card.overview}</p>
      </div>
      <div className="flex-row  sm:flex-row sm:items-end mt-2">
        {isUserRecipe && (
          <div className="flex p-3 flex-col sm:flex-row gap-2">
            <Button className="p-3" onClick={removeRecipe}>Delete</Button>
            <Link href={`/recipes/edit/${props.card._id}`}>
              <Button className="mt-2 sm:mt-0">Edit</Button>
            </Link>
            
          </div>
          
        )}<div className="flex-row  sm:flex-row sm:items-end mt-2"><Link href={`/profile/${props.card.useremail}`}>
        <Button className="flex mt-2 pb-3 text-sm dark:text-black">{props.card.username}</Button>
      </Link></div>
          <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="p-4" variant="outline">Show recipe</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{props.card.title}</AlertDialogTitle>
          <AlertDialogDescription>
          {props.card.overview}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogDescription>
        {props.card.description}
          </AlertDialogDescription>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <Link href={`/profile/${props.card.useremail}`}> <AlertDialogAction>by-  
             {props.card.username}
            </AlertDialogAction></Link>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
      </div>

    </li>
  </ul>
</div>




  
  ) 
}