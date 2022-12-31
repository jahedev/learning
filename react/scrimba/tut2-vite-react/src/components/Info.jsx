import React from 'react'

export default function Info({ fullName, title, website }) {
  return (
    <div className='Info text-center mb-6'>
      <h1 className='text-3xl'>{fullName}</h1>
      <h3 className='text-sm text-yellow-600'>{title}</h3>
      <h5 className='text-xs mt-2'>{website}</h5>
    </div>
  )
}
