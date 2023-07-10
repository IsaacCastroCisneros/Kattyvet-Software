"use client"

import React, { useState,useContext } from 'react'
import { appContext } from '@/app/context/AppContext'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { MyForm, FlexContainer,MyInput, MyButton } from '@/.'
import { consultaContext } from '@/app/consulta'
import post from '@/helpers/post'
import { usePathname, useSearchParams } from 'next/navigation'
import { MyLink } from '@/components/MyLink/MyLink'

interface consulta
{
  paciente_id:string,
  fecha:string,
  motivo:string,
  examen_fisico:string
  diagnostico:string
  pruebas_resultados:string
}

export const Form = () => 
{
  const date = new Date()
  const{pacientes}=useContext(consultaContext)
  const{setPathCollection}=useContext(appContext)
  const searchParams=useSearchParams()
  const currentPacientes=searchParams?.get('pacientes')

  const[values,setValues]=useState<consulta>(
    {
      paciente_id:currentPacientes||"0",
      fecha:`${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`,
      motivo:"",
      examen_fisico:"",
      diagnostico:"",
      pruebas_resultados:""
    })

  const path =usePathname()||''

  return (
    <>
      <MyForm
        submit={async () => await post('insert into consultas set ?',values,'consultas')}
        label="Crear Consulta"
      >
        <FlexContainer>
          <MyInput
            name="paciente"
            value={values.paciente_id}
            fragment={
              <MyLink
                href={
                  {
                    pathname:"/paciente/new",
                    query:"back=true"
                  }
                }
                onClick={()=>setPathCollection(prev=>[...prev,{id:'consultas',path}])}
                label="Crear si no Existe"
                icon={faPlusCircle}
              />
            }
            options={pacientes}
            onChange={(e) => {
              setValues((prev) => {
                return { ...prev, paciente_id: e.target.value };
              });
            }}
          />
          <MyInput
            name="fecha"
            value={values.fecha}
            type="date"
            onChange={(e) =>
              setValues((prev) => {
                return { ...prev, fecha: e.target.value };
              })
            }
          />
        </FlexContainer>
        <FlexContainer>
          <MyInput
            name="motivo"
            type="textarea"
            value={values.motivo}
            onChange={(e) =>
              setValues((prev) => {
                return { ...prev, motivo: e.target.value };
              })
            }
          />
          <div className="flex-1 items-center flex">
            <MyButton
              label="Agregar Examen Fisico"
              icon={faPlusCircle}
              className="flex-1"
            />
          </div>
        </FlexContainer>
        <FlexContainer>
          <MyInput
            name="diagnostico"
            value={values.diagnostico}
            onChange={(e) =>
              setValues((prev) => {
                return { ...prev, diagnostico: e.target.value };
              })
            }
          />
          <MyInput
            name="pruebas_resultados"
            value={values.pruebas_resultados}
            onChange={(e) =>
              setValues((prev) => {
                return { ...prev, pruebas_resultados: e.target.value };
              })
            }
          />
        </FlexContainer>
      </MyForm>
    </>
  );
}
