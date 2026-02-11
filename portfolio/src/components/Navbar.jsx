  import React, { useState, useEffect } from 'react';

  const SimpleNavbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [animate, setAnimate] = useState(false);

    const [active, setActive] = useState("");

    useEffect(() => {

      setAnimate(true)

      const sections = document.querySelectorAll("header, section");

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActive(entry.target.id);
            }
          });
        },
        {
          threshold: 0.6,
        }
      );

      sections.forEach((section) => {
        observer.observe(section);
      });

      return () => {
        sections.forEach((section) => {
          observer.unobserve(section);
        });
      };
    }, []);


    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY >= 180) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => window.removeEventListener("scroll", handleScroll)
    }, []);

    return (
      <nav className={`${scrolled ? "bg-gray-900" : "bg-gray-900/10 pt-5"} ${animate ? 'fade-in-up' : 'opacity-0'} fixed top-0 w-screen z-50 transition-all duration-350 ease-in-out`}>
        <div className="px-4">
          <div className="flex justify-center items-center h-20">

            <div className="flex gap-6 border border-purple-400 py-3 px-9 rounded-xl max-w-screen">
              <a href="#index" className={`transition-all duration-300 ease-in-out text-purple-400 hover:text-purple-300 hover:underline ${active === "index" ? "text-purple-400 underline border-purple-400" : "text-white"}`}>Início</a>
              <a href="#skills" className={`transition-all duration-300 ease-in-out text-purple-400 hover:text-purple-300 hover:underline ${active === "skills" ? "text-purple-400 underline border-purple-400" : "text-white"}`}>Habilidades</a>
              <a href="#projects" className={`transition-all duration-300 ease-in-out text-purple-400 hover:text-purple-300 hover:underline ${active === "projects" ? "text-purple-400 underline border-purple-400" : "text-white"}`}>Projetos</a>
            </div>

          </div>
        </div>
      </nav>
    );
  };

  export default SimpleNavbar;
