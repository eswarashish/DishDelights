import { signIn } from "next-auth/react"



export default async function GoogleLog(){
    signIn('google')
  }