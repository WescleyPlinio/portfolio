export default function Icons() {
    const techList = [
        { icon: "html5-plain", name: "HTML5" },
        { icon: "css3-plain", name: "CSS3" },
        { icon: "javascript-plain", name: "JavaScript" },
        { icon: "bootstrap-plain", name: "Bootstrap" },
        { icon: "tailwindcss-original", name: "Tailwind" },
        { icon: "python-plain", name: "Python" },
        { icon: "django-plain", name: "Django" },
        { icon: "djangorest-plain", name: "DRF" },
        { icon: "flask-original", name: "Flask" },
        { icon: "vitejs-plain", name: "Vite" },
        { icon: "react-original", name: "React" },
        { icon: "mysql-original", name: "MySQL" },
        { icon: "linux-plain", name: "Linux" },
        { icon: "nginx-original", name: "Nginx" },
        { icon: "apache-plain", name: "Apache" },
        { icon: "googlecloud-plain", name: "GCP" },
        { icon: "xml-plain", name: "XML" },
        { icon: "figma-plain", name: "Figma" },
        { icon: "c-plain", name: "C" },
        { icon: "java-plain", name: "Java" }
    ];

    return (
        <div className="grid grid-cols-3 sm:grid-cols-4 md:flex gap-3 md:gap-4 shrink-0 justify-items-center">
            
            {techList.map((tech, index) => (
                <div 
                    key={index} 
                    className="flex flex-col items-center justify-center p-3 md:p-5 border-2 border-blue-300 rounded-2xl md:rounded-4xl w-full md:w-auto hover:bg-blue-900/20 transition-colors duration-300 gap-2"
                >
                    <i className={`devicon-${tech.icon} text-white text-3xl sm:text-4xl md:text-6xl lg:text-8xl`}></i>
                    <span className="text-white text-xs sm:text-sm font-medium tracking-wide">
                        {tech.name}
                    </span>
                </div>
            ))}

        </div>
    )
}