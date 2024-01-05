import {options} from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";


import React from 'react'

const  usersession = async () => {
  const session = await getServerSession(options);
  
    return (
    <div>{session.id}</div>
  )
}

export default usersession