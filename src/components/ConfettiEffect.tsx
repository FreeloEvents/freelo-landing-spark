
import React, { useEffect, useState } from 'react';

interface ConfettiParticle {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
  speed: number;
  rotation: number;
}

interface ConfettiEffectProps {
  active: boolean;
}

const ConfettiEffect: React.FC<ConfettiEffectProps> = ({ active }) => {
  const [particles, setParticles] = useState<ConfettiParticle[]>([]);
  
  useEffect(() => {
    if (!active) {
      setParticles([]);
      return;
    }
    
    const colors = ['#E93A7D', '#D946EF', '#9B87F5', '#7E69AB', '#E93A7D'];
    const newParticles: ConfettiParticle[] = [];
    
    for (let i = 0; i < 100; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: -5 - Math.random() * 10,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: 5 + Math.random() * 10,
        speed: 3 + Math.random() * 2,
        rotation: Math.random() * 360,
      });
    }
    
    setParticles(newParticles);
    
    // Clear confetti after animation completes
    const timeout = setTimeout(() => {
      setParticles([]);
    }, 5000);
    
    return () => clearTimeout(timeout);
  }, [active]);
  
  if (!active || particles.length === 0) return null;
  
  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={`absolute rounded-sm animate-confetti-${
            particle.speed < 4 ? 'slow' : particle.speed > 4.5 ? 'fast' : 'medium'
          }`}
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            transform: `rotate(${particle.rotation}deg)`,
          }}
        />
      ))}
    </div>
  );
};

export default ConfettiEffect;
