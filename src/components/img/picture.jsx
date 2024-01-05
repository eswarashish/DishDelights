"use client"
import { Suspense } from "react"
import { useSession,getSession } from "next-auth/react"
import { Button } from "../ui/button";
import { options } from "@/app/api/auth/[...nextauth]/options";
export function Picture() {
    const { data: session, status, update } = useSession()
    const getSessionData = async () => {
        return detailedSession = await getSession(options);
        
      };
    return(
<Suspense>
    {session ? (
  
 <div>{getSessionData}</div>
) : (
  <></>
)}
</Suspense>
    )
}