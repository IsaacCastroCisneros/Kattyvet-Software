"use client"

import React, { Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react'
export const appContext = React.createContext<values>({
  setPopup: () => null,
  popup: { show: false, content: <></>, title: "" },
  pathCollection: [],
  setPathCollection:()=>null
});

interface values
{
  setPopup:Dispatch<SetStateAction<popup>> 
  popup:popup
  pathCollection:Array<pathCollection> 
  setPathCollection:Dispatch<SetStateAction<Array<pathCollection>>>
}

interface popup
{
  show:boolean,
  content:ReactNode
  title?:string
}

interface pathCollection
{
  id:string,
  path:string
}

export const AppContext = ({children}:{children:ReactNode}) => 
{
  const[popup,setPopup]=useState<popup>({show:false,content:<></>,title:''})
  const[pathCollection,setPathCollection]=useState<Array<pathCollection>>([{id:'',path:''}])

  const key ='PATH_COLLECTION'
  useEffect(()=>
  {
    const collection = sessionStorage.getItem(key)
    if(collection===null)return
    setPathCollection(JSON.parse(collection))
  },[])

  useEffect(()=>
  {
    sessionStorage.setItem(key,JSON.stringify(pathCollection))
  },[pathCollection])

  const values:values=
  {
    popup,
    setPopup,
    pathCollection,
    setPathCollection
  }

  return <appContext.Provider value={values}>{children}</appContext.Provider>;
}
