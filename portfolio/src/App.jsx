import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import './App.css'

function App() {
  return (
    <>
      <header>
        <Navbar />
        <Hero/>
      </header>
      <main className='container mx-auto'>
        <div className='container'>
          
        </div>
      </main>
    </>
  )
}

export default App
