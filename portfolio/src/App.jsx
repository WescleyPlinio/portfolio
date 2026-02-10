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
      <main className='container border-t-2 border-gray-900/50 p-10 mx-auto bg-gray-950'>
        <Section/>
        <div className='h-96'>
          <p className="text-white"></p>
        </div>
      </main>
    </>
  )
}

export default App
