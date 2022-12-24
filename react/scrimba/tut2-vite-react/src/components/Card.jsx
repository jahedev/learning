import React from 'react'

export default function Card({ children }) {
  return (
    <div className='Card bg-neutral-800 max-w-sm m-auto rounded-lg'>
      {children}
    </div>
  )
}
