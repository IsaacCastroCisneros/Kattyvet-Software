"use client"

import React, { ReactNode } from 'react'
import { useRouter } from 'next/navigation'

interface props
{
    children:ReactNode
    title:string
}

export const MyBlock = ({children,title}:props) => 
{
  const router = useRouter()

  return (
    <article className='w-[100%] px-[2rem] py-[1.8rem]'>
        <button onClick={()=>router.back()} className='hover:underline mb-[.8rem] block'>{"< Atras"}</button>
        <h1 className='font-bold text-[2rem] mb-[2rem] block'>
            {title}
        </h1>
        {
            children
        }
    </article>
  )
}
