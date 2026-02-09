import React, { useState } from 'react';

const SimpleNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900/10 fixed top-0 w-screen">
      <div className="px-4">
        <div className="flex justify-center h-20 items-center">

          <div className="flex gap-6">
            <a href="#" className="text-purple-400 transition-colors">Home</a>
            <a href="#" className="text-purple-400 transition-colors">About</a>
            <a href="#" className="text-purple-400 transition-colors">Contact</a>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default SimpleNavbar;
