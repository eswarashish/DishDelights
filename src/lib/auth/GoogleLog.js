import { signIn } from "next-auth/react"

const str = process.env.VERCEL_URL
? `https://${process.env.VERCEL_URL}/recipes`
: `http://localhost:3000/recipes`;


export default async function GoogleLog(){
 
   signIn('google',{
    callbackUrl: str
  });
  }


