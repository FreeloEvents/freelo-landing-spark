
import React, { useEffect, useRef } from 'react';
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
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-freelo-gradient-start via-freelo-gradient-mid to-freelo-gradient-end rounded-full opacity-70"
        animate={{ 
          scale: [1, 1.05, 1],
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />
      
      <motion.div className="absolute inset-0 flex items-center justify-center">
        <img 
          src="/lovable-uploads/8f5234a1-e76d-4f5f-8a70-edaf61e974c0.png" 
          alt="Freelo Logo" 
          className="w-[85%] h-[85%] object-contain"
        />
      </motion.div>
    </motion.div>
  );
};

export default Logo;
