"use client"
import Image from 'next/image'
import {
    Cloud,
    CreditCard,
    Github,

    LifeBuoy,
    LogOut,
    Mail,
    MessageSquare,
    Plus,
    PlusCircle,
    Settings,
    User,
    UserPlus,
    Users,
    SunMoon,
  } from "lucide-react"
  import { ModeToggle } from '@/components/buttons/toggle'
  import { Button } from "@/components/ui/button"
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { useEffect, useState } from "react"
import { Auth } from "../auth/authenticate"
import { signOut } from "next-auth/react"
 import { Suspense } from "react"
 import { useSession } from "next-auth/react"
 import Link from 'next/link'
  export function UserMenu() {
    const apiUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : `http://localhost:3000`;
    const { data: session, status, update } = useSession()
    const [user,setUser] = useState(false);

    
    useEffect(()=>{
  setUser(user)
    },[user])
    return (
      <Suspense>
      <DropdownMenu>
     {status!="authenticated"?(<Auth />):
        (<><DropdownMenuTrigger asChild>
          <Button variant="outline" className=" dark:bg-slate-900">{session?.user?.name}</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 dark:bg-slate-900">
          <DropdownMenuLabel>{session?.user?.email}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
          <Link href={apiUrl+`/profile/${session.user.email}`}> 
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
           
            </DropdownMenuItem></Link>
            
            <DropdownMenuItem>
              <SunMoon className="mr-2 h-4 w-4" />
              <span>Theme</span>
              <DropdownMenuShortcut> <ModeToggle/></DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
          <Link href={apiUrl+'/recipes/add'}> 
            <DropdownMenuItem>
            <Plus className="mr-2 h-4 w-4" />
              <span>Add</span>
              
            </DropdownMenuItem></Link>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <Link href={"https://github.com/20bec023IIITDWD/DishDelights"}><DropdownMenuItem>
            <Github className="mr-2 h-4 w-4" />
            <span>GitHub</span>
          </DropdownMenuItem></Link>
      
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={()=>{signOut({callbackUrl: apiUrl})}}>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
          
        </DropdownMenuContent></>)}
      </DropdownMenu></Suspense>
    )
  }
  