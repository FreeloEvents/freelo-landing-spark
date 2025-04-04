
import React from 'react';
import { MotionDiv, MotionP, fadeIn } from './motion';
import Logo from './Logo';
import { Mail, MessageCircle, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <MotionDiv
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="pt-8 pb-6 px-4 border-t border-white/10"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row-reverse items-center justify-between mb-8">
          <div className="flex items-center mb-6 md:mb-0">
            <Logo size={60} />
            <span className="text-xl sm:text-2xl font-bold mr-2 bg-gradient-to-r from-freelo-bright-pink via-freelo-gradient-mid to-freelo-soft-purple bg-clip-text text-transparent">Freelo</span>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://t.me/ENMeventsisrael" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <a 
              href="https://tinyurl.com/FreeloWhatsappContact" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all"
            >
              <Phone className="w-5 h-5" />
            </a>
            <a 
              href="mailto:enmisraelevents@gmail.com" 
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <MotionP
          variants={fadeIn('up', 0.3)}
          className="text-xs sm:text-sm text-center text-gray-400"
        >
          &copy; Freelo {new Date().getFullYear()}. כל הזכויות שמורות.
        </MotionP>
      </div>
    </MotionDiv>
  );
};

export default Footer;
