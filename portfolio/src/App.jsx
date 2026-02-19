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

        <Section title="Projetos" textOne="Projetos pessoais e desenvolvidos no IFRN:" id="projects" children={
          <div className="grid gap-4 grid-cols-1 lg:grid-cols-3 md:grid-cols-2">

            <Project title="Repex" text="Sistema robusto desenvolvido usando Python e Django. Conta com autenticação, consumo de API do IFRN para login social, paginação com Ajax, acesso a funcionalidades herdado por grupos e total personalização do site via formulários." imgUrl="print.png" projectUrl="github.com/IFRN-SPP/repex"/>

            <Project title="Biblioteca Manager" text="Sistema full-stack usando Python, Django, Vite e React. Consiste em uma biblioteca com crud de livros, autores e editoras. O cliente React consome os endpoints da API local feita usando o Django Rest Framework." imgUrl="print2.png" projectUrl="github.com/WescleyPlinio/pos-2025-projeto-final"/>
            
            <Project title="IF Boletim" text="Cliente desenvolvido com Python e Flask. Consiste em uma aplicação que mostra o boletim completo do usuário autenticado, usando a API do IFRN para autenticação e resgatar as notas." imgUrl="print3.png" projectUrl="github.com/WescleyPlinio/pos-2025-projeto01"/>
            
          </div>
        }/>

      </main>
      <Footer/>
    </>
  )
}

export default App
