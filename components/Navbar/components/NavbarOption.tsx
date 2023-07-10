import {faChevronRight} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'
import navbarOption from '../interfaces/navbarOption'

export const NavbarOption = ({href,label,icon}:navbarOption) => {
  return (
    <li>
        <Link className='flex text-text items-center text-[.9rem] px-[1rem] w-[15rem] py-[.8rem] hover:bg-[#383838]' href={href}>
           <FontAwesomeIcon size='2xl' icon={icon} className='mr-[.8rem]' />
           <span className='capitalize'>
              {label}
           </span>
           <FontAwesomeIcon className='ml-auto' icon={faChevronRight} />
        </Link>
    </li>
  )
}
