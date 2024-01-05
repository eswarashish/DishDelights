"use client"
import Link from 'next/link'
import React from 'react'

const Readrecipe = (props) => {
    const recipe = props;
  return (
 
    <div className="min-h-screen flex items-center justify-center ">
    <div className="mx-auto max-w-7xl ">
    <div className="relative isolate overflow-hidden dark:bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex">
  <svg
    viewBox="0 0 1024 1024"
    className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
    aria-hidden="true"
  >
    <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
    <defs>
      <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
        <stop stopColor="#7775D6" />
        <stop offset={1} stopColor="#E935C1" />
      </radialGradient>
    </defs>
  </svg>
  <div className="mx-auto max-w-7xl text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-center">
    <h1 className="text-1xl font-bold tracking-tight pb-10 text-black dark:text-slate-300 sm:text-5xl">
     {recipe.title}
      <br />
     by {recipe.username}
    </h1>
    <p className="mt-6 text-lg leading-8 text-black dark:text-white">
      {recipe.overview}
    </p>
    <p className="mt-6 text-md leading-8 text-black dark:text-white">
      {recipe.overview}
    </p>
    <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
      <Link
        href={`/recipes`}
        className="rounded-md bg-white px-4 py-3 text-lg font-semibold text-gray-900 dark:text-gray-800 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        Home
      </Link>
      <Link href={`/profile/${recipe.useremail}`} className="text-lg font-semibold leading-6 text-black dark:text-slate-300">
        Author's Profile <span aria-hidden="true">→</span>
      </Link>
    </div>
  </div>
  <div className="relative mt-16 h-80 lg:mt-8"></div>
</div>

    </div>
  </div>
  
 
  )
}

export default Readrecipe