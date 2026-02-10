import React, { useState, useEffect } from 'react';

const SimpleNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 400) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll)
    }, []);

  return (
    <nav className={`${scrolled ? "bg-gray-900" : "bg-gray-900/10 pt-5"} fixed top-0 w-screen transition-all duration-350 ease-in-out`}>
      <div className="px-4">
        <div className="flex justify-center h-20 items-center">

          <div className="flex gap-6">
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
