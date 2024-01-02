import {signIn} from "next-auth/react"

export default async function GitLog(){
   signIn('github',{
    callbackUrl: process.env.NEXTAUTH_URL
  });
}