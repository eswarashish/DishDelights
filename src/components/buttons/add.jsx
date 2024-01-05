import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import Link from "next/link"

export function Add() {
  return <Link href={'/recipes/add'}><Button className="fixed bottom-4 right-4 m-4 dark:bg-white bg-black text-white rounded-full p-2 flex items-center justify-center shadow-lg hover:shadow-mg
   dark:shadow-blue-900 dark:text-black z-5
    dark:hover:bg-blue-950 dark:hover:text-white transition-all
     hover:text-black dark:hover:shadow-white hover:bg-white" ><Plus className=""/></Button></Link>
}