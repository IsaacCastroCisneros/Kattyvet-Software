import { MyBlock } from '@/components/MyBlock/MyBlock'
import React from 'react'
import { PropietariosForm } from './components/PropietariosForm'

export default function page() 
{

  return (
    <MyBlock title='Crear Propietario'>
         <PropietariosForm/>
    </MyBlock>
  )
}
