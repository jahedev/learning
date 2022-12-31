import React from 'react'

import {
  TwitterSquareFilled,
  FacebookFilled,
  InstagramFilled,
  GithubFilled,
} from '@ant-design/icons'

export default function Footer() {
  const iconProperties =
    'text-4xl text-slate-300 mr-7 cursor-pointer hover:text-slate-100'
  return (
    <footer className='bg-zinc-900 w-full h-20 pl-5 pt-3 pr-5 flex justify-center'>
      <TwitterSquareFilled className={iconProperties} />
      <FacebookFilled className={iconProperties} />
      <InstagramFilled className={iconProperties} />
      <GithubFilled className={iconProperties} />
    </footer>
  )
}
