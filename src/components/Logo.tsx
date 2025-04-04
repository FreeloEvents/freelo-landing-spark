
import React from 'react';
import { motion } from 'framer-motion';

interface LogoProps {
  className?: string;
  size?: number;
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 120 }) => {
  return (
    <motion.div
      className={`relative ${className}`}
      style={{ width: size, height: size }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <motion.div className="absolute inset-0 flex items-center justify-center">
        <img 
          src="/lovable-uploads/16d87f8c-612a-44bd-aecc-1da2a880a08f.png" 
          alt="Freelo Logo" 
          className="w-[85%] h-[85%] object-contain"
        />
      </motion.div>
    </motion.div>
  );
};

export default Logo;
