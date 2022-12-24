import React from 'react'

export default function ButtonHolder({ children }) {
  return (
    <div className='button-holder mb-6 flex flex-row justify-center'>
      {children}
    </div>
  )
}
