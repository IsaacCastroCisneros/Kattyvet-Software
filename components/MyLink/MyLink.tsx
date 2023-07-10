"use client"

import buttonLink from '@/styles/strings/buttonLink'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link,{LinkProps} from 'next/link'
import React from 'react'
import { twMerge } from 'tailwind-merge'

interface props extends LinkProps
{
  className?:string
  icon:IconProp
  label:string
}

export const MyLink = (props:props) => 
{
  const
  {
    className,
    icon,
    label,
    ...myProps
  }=props

  const c = twMerge(buttonLink,className)


  return (
    <Link {...myProps} className={c}>
        <strong className="capitalize">{label}</strong>
        <FontAwesomeIcon size='xl' icon={icon} />
    </Link>
  )
}
