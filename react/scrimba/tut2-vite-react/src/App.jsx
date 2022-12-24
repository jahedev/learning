import { useState } from 'react'

import Button from './components/Button'
import Card from './components/Card'
import Content from './components/Content'
import Footer from './components/Footer'
import Info from './components/Info'

import ImageHolder from './components/ImageHolder'

import photo from './assets/photo.png'
import ButtonHolder from './components/ButtonHolder'
import { MailFilled } from '@ant-design/icons'

function App() {
  return (
    <div className='App w-screen h-screen pt-10 bg-gray-800 text-slate-200'>
      <Card>
        <ImageHolder image={photo} />
        <div className='CardMain p-8'>
          <Info
            fullName='Laura Smith'
            title='Frontend Developer'
            website='laurasmith.website'
          />
          <ButtonHolder className='flex flex-col align-center justify-center'>
            <Button icon='email' text='Email' />
            <Button icon='linkedin' text='LinkedIn' />
          </ButtonHolder>
          <Content headerText='About'>
            I am a frontend developer with a particular interest in making
            things simple and automating daily tasks. I try to keep up with
            security and best practices, and am always looking for new things to
            learn.
          </Content>
          <Content headerText='Interests'>
            Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
            Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
          </Content>
        </div>
        <Footer />
      </Card>
    </div>
  )
}

export default App
