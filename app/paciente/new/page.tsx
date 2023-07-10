import { MyBlock } from '@/components/MyBlock/MyBlock'
import React from 'react'
import { FormPaciente } from './components/FormPaciente'
import get from '@/helpers/get'

export default async function page() 
{
  const{res:propietarios}=await get('select id,nombre from propietarios')
  
  return (
    <MyBlock title='Agregar Paciente' >
      <FormPaciente propietarios={propietarios} />
    </MyBlock>
  )
}
