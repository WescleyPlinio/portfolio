export default function Footer() {
    return (
        <footer className="bg-gray-900 py-10 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex justify-center items-center">
                <p className="text-white text-center">&copy; Portfólio de Wescley</p>
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