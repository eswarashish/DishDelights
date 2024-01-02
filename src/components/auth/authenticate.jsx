"user client"
import * as React from "react"

import { GithubIcon } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Login from "@/lib/auth/Login"
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
import { useState,useEffect } from "react"
import { FcGoogle } from "react-icons/fc";
import GoogleLog from "@/lib/auth/GoogleLog"
import GitLog from "@/lib/auth/GitLog"

export function Auth(props) {
 const [auth, setAuth] = useState("Login")
 const toggleAuth = () => {
  setAuth(auth === 'Login' ? 'Register' : 'Login');
};

const [email,setEmail] = useState("");

const [password,setPass] = useState("");


const [error, setError]= useState("");
const toggleError=(err)=>{
  setError(err)
}
const handleSubmit = (e)=>{

  if(!email||!password){
     toggleError("Enter all the fields");
  }
 else{ auth=="Login"?(()=> Login(email,password)):(()=>0);}
  
  setEmail("");
  setPass("");

  
  }
useEffect(()=>{
  setAuth(auth);
  setEmail(email);
  setPass(password);


 

},[auth,email,password,error])


  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline" className=" dark:bg-slate-900" >Login/SingUp</Button>
      </DrawerTrigger>
       <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>{auth}</DrawerTitle>
            <DrawerDescription>Authentication</DrawerDescription>
          </DrawerHeader>
           <div className="p-4 pb-0">
            
          <Input placeholder="Email" type="email" onChage={(e)=>{setEmail(e.target.value)}}></Input>
          <br />
          <Input placeholder="Password" type="password" onChage={(e)=>{setPass(e.target.value)}}></Input>
          <br />
         
          </div>
          <div className="w-full flex justify-center text-red-500"><span>{error}</span></div>
          <DrawerFooter>
          <Button className="justify" onClick={handleSubmit}>{auth}</Button>
            
            <Button variant="outline" onClick={GitLog}>Continue with   <span className="pl-2"><GithubIcon className="w-5"/></span> </Button>
            <Button variant="outline" onClick={GoogleLog}>Continue with   <span className="pl-2"><FcGoogle style={{ fontSize: '20px' }} /></span> </Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
              
            </DrawerClose>
            <div className="w-full flex justify-center"><span className="underline font-semibold" onClick={toggleAuth}>{auth=="Login"?"Register":"Login"}</span></div>
          </DrawerFooter>
        </div>
      </DrawerContent> 
    </Drawer>
  )
}
