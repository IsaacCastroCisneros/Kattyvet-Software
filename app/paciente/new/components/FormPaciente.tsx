"use client"

import { FlexContainer, MyForm, MyInput } from '@/components'
import { MyButton } from '@/components/MyButton/MyButton'
import idNombres from '@/interfaces/idNombre'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import React,{useContext, useState} from 'react'
import post from '@/helpers/post'
import { appContext } from '@/app/context/AppContext'

interface paciente
{
  nombre:string,
  especie:string,
  raza:string,
  edad:string,
  propietario_id:string,
}

export const FormPaciente = ({propietarios}:{propietarios:Array<idNombres>}) => 
{
  const[values,setValues]=useState<paciente>(
    {
      nombre:"",
      especie:"",
      raza:"",
      edad:"",
      propietario_id:"",
    }
  )

  return (
    <MyForm label='crear paciente' submit={async()=>await post('insert into pacientes set ?',values,'pacientes')}>
       <FlexContainer>
        <MyInput
          name="propietario_id"
          options={propietarios}
          onChange={(e) =>
            setValues((prev) => {
              return { ...prev, propietario_id: e.target.value };
            })
          }
          fragment=
          {
            <MyButton
             label='Crear si no Existe'
             icon={faCirclePlus}  
             href={
              {
                pathname:"/propietario/new",
                query:"back=true"
              }}
            />
          }
        />
        <MyInput
          name="nombre"
          onChange={(e) =>
            setValues((prev) => {
              return { ...prev, nombre: e.target.value };
            })
          }
        />
      </FlexContainer>
      <FlexContainer>
        <MyInput
          name="especie"
          onChange={(e) =>
            setValues((prev) => {
              return { ...prev, especie: e.target.value };
            })
          }
        />
        <MyInput
          name="edad"
          onChange={(e) =>
            setValues((prev) => {
              return { ...prev, edad: e.target.value };
            })
          }
        />
        <MyInput
          name="raza"
          onChange={(e) =>
            setValues((prev) => {
              return { ...prev, raza: e.target.value };
            })
          }
        />
      </FlexContainer>
    </MyForm>
  )
}
