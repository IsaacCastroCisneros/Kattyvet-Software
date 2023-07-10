import { IconProp } from '@fortawesome/fontawesome-svg-core'
import React, { AnchorHTMLAttributes, ButtonHTMLAttributes, MouseEventHandler } from 'react'
import { twMerge } from 'tailwind-merge'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { Url } from 'next/dist/shared/lib/router/router'
import buttonLink from '@/styles/strings/buttonLink'


interface props extends ButtonHTMLAttributes<HTMLButtonElement>
{
  icon:IconProp,
  label:string,
  href?:Url
}

export const MyButton = (myProps:props) => 
{
  const
  {
    className,
    icon,
    label,
    href,
    ...props
  }=myProps
  const c= twMerge(buttonLink,className) 

  return (
    <>
    {
     !href
      &&
      <button {...props} className={c}
        type='button'
        >
        <strong className="capitalize">{label}</strong>
        <FontAwesomeIcon size="xl" icon={icon}/>
      </button>
    }
    {
      href
      &&
      <Link className={c} href={href}>
        <strong className="capitalize">{label}</strong>
        <FontAwesomeIcon size="xl" icon={icon}/>
      </Link>
    }
    </>
  );
}
