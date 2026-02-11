import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StarsBackground from './components/Stars'
import Section from './components/Section'
import './App.css'

function App() {
  return (
    <>
      <header>
        <Navbar />
        <Hero element={<StarsBackground/>}></Hero>
      </header>
      <main className='container p-10 mx-auto my-30 bg-gray-950'>
        <Section title="Quem sou eu?" textOne="Me chamo Wescley, técnico em informática para internet." textTwo="Me formei no IFRN, e lá me tornei um profissional full-stack."/>
      </main>
    </>
  )
}

export default App
