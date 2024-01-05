"use client"
import { useState,useEffect } from 'react'
import RecipeBoard from '@/components/layouts/recipeboard'
import React from 'react'
import Dataserver from "@/lib/server/dataserve"
const ff = async() => {

  const data = await Dataserver();

  return (
    <div>
      
       <RecipeBoard recipes={data}></RecipeBoard>
    </div>
  )
}

export default ff