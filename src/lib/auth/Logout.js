import {signOut} from 'next-auth/react'
export default async function Logout(){
   await signOut();
}