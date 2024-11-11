import React from 'react'

export default function Heading({title,subTitle}) {
  return (
    <div className='my-8'>
      <h2 className='text-center text-3xl font-thin'>{title}</h2>
      <p className='text-center text-xl'>{subTitle}</p>
    </div>
  )
}
