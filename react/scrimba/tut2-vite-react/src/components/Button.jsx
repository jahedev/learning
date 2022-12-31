import React from 'react'
import { MailFilled, LinkedinOutlined } from '@ant-design/icons'

export default function Button({ icon, text }) {
  let isLinkedin = false

  switch (icon) {
    case 'email':
      icon = <MailFilled className='align-middle' />
      break
    case 'linkedin':
      icon = <LinkedinOutlined className='align-middle' />
      isLinkedin = true
      break
  }

  return (
    <button
      className={`ml-2 px-6 py-1 font-semibold rounded-md pb-1.5 ${
        isLinkedin
          ? 'bg-sky-700 text-slate-100 hover:bg-sky-900 active:bg-sky-600'
          : 'bg-slate-100 text-slate-800 hover:bg-slate-300 active:bg-slate-400'
      }`}
    >
      <span className='mr-2'>{icon}</span>
      <span className=''>{text}</span>
    </button>
  )
}
