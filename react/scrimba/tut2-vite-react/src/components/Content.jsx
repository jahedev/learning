import React from 'react'

export default function Content({ headerText, children }) {
  return (
    <div className='content'>
      <h1 className='mt-2 mb-2 text-2xl '>{headerText}</h1>
      <p className='text-sm'>{children}</p>
    </div>
  )
}
