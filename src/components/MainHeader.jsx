import React from 'react'
import { HireBtn } from './HireBtn'

const mainHeader = ({header, text}) => {
  return (
   <>
   <div className='text-center p-10 border-b-2 border-gray-50 md:m-0 '>
        <h1 className='text-5xl'>{header}</h1>
        <p className='text-lg font-thin py-4'>{text}</p>
        <HireBtn/>
    </div>
   </>
  )
}

export default mainHeader