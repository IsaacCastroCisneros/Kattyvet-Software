import idNombres from '@/interfaces/idNombre'
import React, { InputHTMLAttributes, ReactNode } from 'react'
import {twMerge} from 'tailwind-merge'

interface props extends InputHTMLAttributes<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement>
{
  options?:Array<idNombres>
  fragment?:ReactNode
}

export const MyInput = (props:props) => 
{
  let
  {
    className,
    placeholder,
    options,
    onChange,
    fragment,
    ...myProps
  }=props

  const c =twMerge("bg-field text-text text-[.9rem] border-fieldBorder border-[1px] p-[16px] rounded-[.6rem] placeholder:text-placeholder outline-none focus:shadow-[0px_0px_.1rem_.1rem_#5e5e5e] flex-1 placeholder:capitalize w-[100%] resize-none",className)

  placeholder=props.name?.toLowerCase().split('_').join(' ')

  const type =props.type

  return (
    <div className="flex-1 relative w-[100%]">
      {!options && type !== "textarea" && (
        <input
          className={c}
          placeholder={placeholder}
          onChange={onChange}
          {...myProps}
        />
      )}
      {options && type !== "textarea" && (
        <select className={c} placeholder={placeholder} onChange={onChange} value={props.value}>
          {options.length>0&&
           options.map((opt) => (
            <option key={opt.id} value={opt.id}>
              {opt.nombre}
            </option>
          ))}
        </select>
      )}
      {fragment}
      {type === "textarea" && (
        <>
          <strong className='capitalize text-[1.2rem] text-placeholder block mb-[.2rem]'>{placeholder}</strong>
          <textarea
            className={`${c} h-[10rem]`}
            onChange={onChange}
          ></textarea>
        </>
      )}
    </div>
  );
}
