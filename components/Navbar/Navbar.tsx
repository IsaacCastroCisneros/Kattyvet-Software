import React from 'react'
import options from './helpers/options'
import { NavbarOption } from './components/NavbarOption'

export const Navbar = () => {
  return (
    <nav className='fixed h-[100%] bg-myBlack'>
       <ul>
         {
           options.map((opt,pos)=>
           (
             <NavbarOption key={pos} {...opt} />
           ))
         }
       </ul>
    </nav>
  )
}
