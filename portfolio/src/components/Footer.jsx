export default function Footer() {
    return (
        <footer className="bg-gray-900 py-10 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex justify-center items-center">
                <p className="text-white text-center">&copy; Portfólio de Wescley</p>
            </div>
            <div className="flex justify-center items-center">
                <a href="curriculo.pdf" download="Currículo de Wescley" className="text-white underline flex gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m9 13.5 3 3m0 0 3-3m-3 3v-6m1.06-4.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                    </svg>
                    Baixar currículo
                </a>
            </div>
            <div className="flex justify-center items-center gap-2">
                <a target="blank" href="https://github.com/WescleyPlinio">
                    <i className="devicon-github-original text-white text-3xl"></i>
                </a>
                <a target="blank" href="https://linkedin.com/in/devwescley">
                    <i className="devicon-linkedin-plain text-white text-3xl"></i>
                </a>
            </div>
        </footer>
    )
}