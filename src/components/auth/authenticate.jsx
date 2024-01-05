
import * as React from "react"

import { GithubIcon } from "lucide-react"

import { Button } from "@/components/ui/button"

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
// import { useState,useEffect } from "react"
import { FcGoogle } from "react-icons/fc";
import GoogleLog from "@/lib/auth/GoogleLog"
import GitLog from "@/lib/auth/GitLog"

export function Auth(props) {
//  const [auth, setAuth] = useState("Login")
//  const toggleAuth = () => {
//   setAuth(auth === 'Login' ? 'Register' : 'Login');
// };

// const [email,setEmail] = useState("");

// const [password,setPass] = useState("");


// const [error, setError]= useState("");
// const toggleError=(err)=>{
//   setError(err)
// }


  // if(!email||!password){
  //    toggleError("Enter all the fields");
  // }
 



  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline" className=" dark:bg-slate-900" >Login / SignUp</Button>
      </DrawerTrigger>
       <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Continue with</DrawerTitle>
            <DrawerDescription>Authentication</DrawerDescription>
          </DrawerHeader>
           <div className="p-4 pb-0">
            
      
         
          </div>
     
          <DrawerFooter>
          {/* <Button className="justify" onClick={handleSubmit}>{auth}</Button>
             */}
            <Button variant="outline" onClick={GitLog}>Continue with   <span className="pl-2"><GithubIcon className="w-5"/></span> </Button>
            <Button variant="outline" onClick={GoogleLog}>Continue with   <span className="pl-2"><FcGoogle style={{ fontSize: '20px' }} /></span> </Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
              
            </DrawerClose>
          
          </DrawerFooter>
        </div>
      </DrawerContent> 
    </Drawer>
  )
}
