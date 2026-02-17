import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StarsBackground from './components/Stars'
import Section from './components/Section'
import FadeIn from './components/FadeIn'
import Icons from './components/Icons'
import Footer from './components/Footer'
import Project from './components/Project'

function App() {
  return (
    <>
      <header id='index'>
        <Navbar />
        <Hero element={<StarsBackground />}></Hero>
      </header>
      <main className='container p-10 mx-auto bg-gray-950'>

        <Section title="Quem sou eu?" id="about"
        textOne="Me chamo Wescley, técnico em informática para internet pelo IFRN. Sou apaixonado por tecnologia e por criar soluções usando códigos." textTwo="O IFRN me transformou em um profissional com conhecimento em desenvolvimento full-stack, análise de dados e design UI/UX." />

        <Section title="Habilidades" textOne="Possuo conhecimento nas seguintes tecnologias:" id="skills" children={
          <div className="overflow-hidden">
              <div className="flex gap-4 animate-infinite-slider w-max">
                <Icons />
                <Icons />
              </div>
            </div>
        }/>

        <Section title="Projetos" id="projects" children={
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <Project title="Repex" text="Texto do projeto" url="print.png"/>
          </div>
        }/>

      </main>
      <Footer/>
    </>
  )
}

export default App
