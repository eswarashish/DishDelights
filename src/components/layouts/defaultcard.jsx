"use client"

import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

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

export default  function DRecipeCard(props) {

  
  const router = useRouter();

 
 
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
      <div className="flex flex-col sm:flex-row sm:items-end mt-2">
     
          <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="pl-4" variant="outline">Show recipe</Button>
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
         <AlertDialogAction>by-  
             {props.card.username}
            </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
      </div>

    </li>
  </ul>
</div>




  
  ) 
}