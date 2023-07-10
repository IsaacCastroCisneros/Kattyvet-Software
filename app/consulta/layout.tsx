import React, { ReactNode } from 'react'
import { MyBlock } from '@/.'

export default function layout({children}:{children:ReactNode}) 
{
  return (
    <MyBlock title='Consultas'>
      {
        children
      }
    </MyBlock>
  )
}
