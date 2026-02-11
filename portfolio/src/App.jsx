import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StarsBackground from './components/Stars'
import Section from './components/Section'
import FadeIn from './components/FadeIn'
import Icons from './components/Icons'

function App() {
  return (
    <>
      <header id='index'>
        <Navbar />
        <Hero element={<StarsBackground />}></Hero>
      </header>
      <main className='container p-10 mx-auto bg-gray-950'>

        <Section title="Quem sou eu?" id="index"
        textOne="Me chamo Wescley, técnico em informática para internet." textTwo="Me formei no IFRN, e lá me tornei um profissional full-stack." />

        <Section title="Habilidades" id="skills" children={
          <div className="overflow-hidden">
              <div className="flex gap-4 animate-infinite-slider w-max">
                <Icons />
                <Icons />
              </div>
            </div>
        }/>

      </main>
    </>
  )
}

export default App
