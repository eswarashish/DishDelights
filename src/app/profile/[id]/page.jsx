"use client"
import { useState,useEffect } from 'react'
import ProfileBoard from '@/components/layouts/profile'
import React from 'react'
import Profile from "@/lib/server/profileserver"
const ff = async(id) => {
    const decodedId = decodeURIComponent(id.params.id);

  
    // Now you can use the decodedId in your Profile function
    const data = await Profile(decodedId);

  return (
    <div>
      
       <ProfileBoard recipes={data}></ProfileBoard>
    </div>
  )
}

export default ff