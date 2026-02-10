import React, { useEffect, useRef } from 'react';

const StarsBackground = ({ count = 200 }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Limpa estrelas existentes
    container.innerHTML = '';

    // Cria novas estrelas
    for (let i = 0; i < count; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      
      // Tamanho aleatório
      const size = Math.random() * 3 + 1;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      
      // Posição aleatória
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      
      // Opacidade aleatória
      star.style.opacity = `${Math.random() * 0.7 + 0.3}`;
      
      // Animação de brilho (opcional)
      if (Math.random() > 0.7) {
        star.style.animation = `twinkle ${Math.random() * 3 + 2}s infinite alternate`;
      }
      
      container.appendChild(star);
    }
  }, [count]);

  return <div ref={containerRef} className="stars-background" />;
};

export default StarsBackground;