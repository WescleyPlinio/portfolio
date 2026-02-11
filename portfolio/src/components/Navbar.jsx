import React, { useState, useEffect } from 'react';

const SimpleNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [animate, setAnimate] = useState(false);

    useEffect(()=>{
        setAnimate(true)
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
    <nav className={`${scrolled ? "bg-gray-900" : "bg-gray-900/10 pt-5"} ${animate ? 'fade-in-up':'opacity-0' } fixed top-0 w-screen z-50 transition-all duration-350 ease-in-out`}>
      <div className="px-4">
        <div className="flex justify-center items-center h-20">

          <div className="flex gap-6 border border-purple-400 py-3 px-9 rounded-xl max-w-screen">
            <a href="#" className="transition-all duration-300 ease-in-out text-purple-400 hover:text-purple-300 hover:underline">Início</a>
            <a href="#" className="transition-all duration-300 ease-in-out text-purple-400 hover:text-purple-300 hover:underline">Habilidades</a>
            <a href="#" className="transition-all duration-300 ease-in-out text-purple-400 hover:text-purple-300 hover:underline">Projetos</a>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default SimpleNavbar;
