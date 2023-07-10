"use client"

import idNombres from '@/interfaces/idNombre'
import React,{ReactNode} from 'react'

export const consultaContext=React.createContext<values>({pacientes:[],propietarios:[]})

interface values
{
  pacientes:Array<idNombres>
  propietarios:Array<idNombres>
}

interface props
{
  children:ReactNode,
  pacientes:Array<idNombres>
  propietarios:Array<idNombres>
}

export const ConsultaContext = ({children,pacientes,propietarios}:props) => 
{
  const values=
  {
    pacientes,
    propietarios
  }

  return (
    <consultaContext.Provider value={values}>
     {
      children
     }
    </consultaContext.Provider>
  )
}
