import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Section from './components/Section'
import FadeIn from './components/FadeIn'
import Icons from './components/Icons'
import Footer from './components/Footer'
import Project from './components/Project'

function App() {
  return (
    <div className="relative min-h-screen w-full bg-gray-950 text-white overflow-x-hidden">

      <div
        className="fixed inset-0 pointer-events-none z-0 bg-[size:40px_40px] bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]"
      />

      <div
        className="fixed -top-[100px] -right-[100px] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(147,197,253,0.35)_0%,transparent_70%)] blur-[100px] pointer-events-none z-0" />

      <div className="relative z-10">
        <header id='index'>
          <Navbar />
          <Hero text={"Olá, sou Wescley Galdino"} imgUrl={"heroComputer.svg"} />
        </header>

        <main className='container mx-auto px-10'>
          <Section
            title="Quem sou eu?"
            id="about"
            textOne="Sou Wescley, desenvolvedor de software full-stack cursando TI na UFRN e com formação técnica de informática para internet pelo IFRN. Tenho experiência em desenvolvimento com Python, interface de sistemas (UI/UX), criação de APIs REST e análise de dados."
            textTwo="Sou apaixonado por tecnologia e por criar soluções usando códigos, então gosto de sempre estar aprendendo novas linguagens, ferramentas e tecnologias!"
          />

          <Section
            title="Habilidades"
            textOne="Possuo conhecimento nas seguintes tecnologias:"
            id="skills"
            children={
              <div className="overflow-hidden">
                <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                  <div className="flex w-max animate-infinite-slider gap-4">
                    <Icons />
                    <Icons />
                  </div>
                </div>
              </div>
            }
          />

          <Section
            title="Projetos"
            textOne="Projetos pessoais e desenvolvidos no IFRN:"
            id="projects"
            children={
              <div className="grid gap-4 grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
                <Project
                  title="Repex"
                  text="Sistema robusto desenvolvido usando Python e Django. Conta com autenticação, consumo de API do IFRN para login social, paginação com Ajax, acesso a funcionalidades herdado por grupos e total personalização do site via formulários."
                  imgUrl="print.png"
                  projectUrl="github.com/IFRN-SPP/repex"
                />

                <Project
                  title="Biblioteca Manager"
                  text="Sistema full-stack usando Python, Django, Vite e React. Consiste em uma biblioteca com crud de livros, autores e editoras. O cliente React consome os endpoints da API local feita usando o Django Rest Framework."
                  imgUrl="print2.png"
                  projectUrl="github.com/WescleyPlinio/pos-2025-projeto-final"
                />

                <Project
                  title="IF Boletim"
                  text="Cliente desenvolvido com Python e Flask. Consiste em uma aplicação que mostra o boletim completo do usuário autenticado, usando a API do IFRN para autenticação e resgatar as notas."
                  imgUrl="print3.png"
                  projectUrl="github.com/WescleyPlinio/pos-2025-projeto01"
                />

                <Project
                  title="DistroWatch 2.0"
                  text="Projeto de rebranding da identidade visual e UI/UX do DistroWatch, desenvolvido na disciplina Interface de Usuário no IFRN."
                  imgUrl="print4.png"
                  projectUrl="ellainy.github.io/DistroWatch2.0/"
                />

                <Project
                  title="Torqlab"
                  text="Projeto de Landing page desenvolvido para a equipe TorqLab. Por motivos maiores foi descontinuada."
                  imgUrl="print5.png"
                  projectUrl="ellainy.github.io/TorqLab"
                />
              </div>
            }
          />
        </main>

        <Footer />
      </div>

    </div>
  )
}

export default App