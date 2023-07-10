"use client"

import { FlexContainer, MyForm, MyInput } from '@/components'
import post from '@/helpers/post'
import propietario from '@/interfaces/propietario'
import React, { useState } from 'react'


export const PropietariosForm = () => 
{
  const[values,setValues]=useState<propietario>(
    {
      nombre:"",
      direccion:"",
      telefono:"",
      email:"",
      dni:""
    })

  return (
    <MyForm label="crear propietario" submit={async () =>await post('insert into propietarios set ?',values)}>
      <FlexContainer>
        <MyInput
          name="nombre"
          value={values.nombre}
          onChange={(e) =>
            setValues((prev) => {
              return { ...prev, nombre: e.target.value };
            })
          }
        />
        <MyInput
          name="dni"
          value={values.dni}
          onChange={(e) =>
            setValues((prev) => {
              return { ...prev, dni: e.target.value };
            })
          }
        />
      </FlexContainer>
      <FlexContainer>
        <MyInput
          name="telefono"
          value={values.telefono}
          onChange={(e) =>
            setValues((prev) => {
              return { ...prev, telefono: e.target.value };
            })
          }
        />
        <MyInput
          name="email"
          value={values.email}
          onChange={(e) =>
            setValues((prev) => {
              return { ...prev, email: e.target.value };
            })
          }
        />
      </FlexContainer>
      <FlexContainer>
        <MyInput
          name="direccion"
          value={values.direccion}
          onChange={(e) =>
            setValues((prev) => {
              return { ...prev, direccion: e.target.value };
            })
          }
        />
      </FlexContainer>
    </MyForm>
  );
}
