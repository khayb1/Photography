import React from 'react'


export const ServiceCard = ({ServiceIcon, ServiceTitle, SerivceInfo} ) => {
  return (
    <>
        <div className='px-5 py-8 w-64 h-3/6 bg-slate-300 text-lg font-light rounded-lg             hover:scale-105 ease-in-out duration-300  shadow-lg hover:bg-blue-200'>
            <div className='text-5xl text-blue-600 text-center'>{ServiceIcon}</div>
            <h3 className='text-xl py-2 font-bold'>{ServiceTitle}</h3>
            <p className='  font-light'>{SerivceInfo}</p>
        </div>
    </>
  )
}
