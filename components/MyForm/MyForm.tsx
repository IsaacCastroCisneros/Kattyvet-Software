"use client"

import React, { FormHTMLAttributes, ReactNode, useContext, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { appContext } from '@/app/context/AppContext'

interface props extends FormHTMLAttributes<HTMLFormElement>
{
  children:ReactNode
  submit:()=>Promise<any>,
  label:string
}

export const MyForm = ({children,submit,label,...props}:props) => 
{
  const searchParams = useSearchParams()
  const router = useRouter()
  const{pathCollection}=useContext(appContext)

  return (
    <form
      {...props}
      className='w-[100%]'
      onSubmit={async(e)=>
        {
          e.preventDefault();
          const{err,id,table}= await submit();
          if(err)return

          
          if(searchParams?.get('back')==='true')
          {
            const myPath = pathCollection.find(p=>p.id===table) || {path:''}
            const{path}=myPath
            router.push(`${path}?${table}=${id}`)
          }
        }}
      >
       {children}
       <button className='bg-myYellow text-[#000] uppercase px-[.8rem] py-[.7rem] rounded-[.5rem] hover:opacity-[.8]'>{label}</button>
    </form>
  )
}
