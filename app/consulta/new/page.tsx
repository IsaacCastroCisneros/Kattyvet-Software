
import React from 'react'
import { Form } from '.';
import { ConsultaContext } from '../context/ConsultaContext';
import get from '@/helpers/get';

export default async function page() 
{
  const {res:pacientes}=await get("select id,nombre from pacientes")
  const {res:propietarios}=await get("select id,nombre from propietarios")

  return (
   <ConsultaContext pacientes={pacientes} propietarios={propietarios}>
     <Form/>
   </ConsultaContext>
  );
}
