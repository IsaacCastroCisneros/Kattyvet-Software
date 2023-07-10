"use client"
import React, { ReactNode } from 'react'

export const FlexContainer = ({children}:{children:ReactNode}) => 
{
    
  return (
    <div className='flex gap-[1rem] w-[100%] mb-[2rem]'>
      {
        children
      }
    </div>
  )
}
