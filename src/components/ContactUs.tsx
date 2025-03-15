
import React from 'react';
import { Mail, MessageCircle, Phone } from 'lucide-react';
import { MotionDiv, MotionH2, MotionP, fadeIn, staggerContainer } from './motion';

const ContactUs: React.FC = () => {
  const contactMethods = [
    {
      icon: <MessageCircle className="w-8 h-8 text-freelo-soft-purple" />,
      title: "טלגרם",
      value: "ENMeventsIL",
      link: "https://t.me/ENMeventsisrael"
    },
    {
      icon: <Phone className="w-8 h-8 text-freelo-bright-pink" />,
      title: "וואטסאפ",
      value: "צרו קשר",
      link: "https://tinyurl.com/FreeloWhatsappContact"
    },
    {
      icon: <Mail className="w-8 h-8 text-freelo-gradient-mid" />,
      title: "אימייל",
      value: "enmisraelevents@gmail.com",
      link: "mailto:enmisraelevents@gmail.com"
    }
  ];

  return (
    <MotionDiv
      variants={staggerContainer(0.1, 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="py-16 px-4"
    >
      <MotionH2
        variants={fadeIn('up', 0.2)}
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-2 shimmer-text"
      >
        צרו קשר
      </MotionH2>
      
      <MotionP
        variants={fadeIn('up', 0.3)}
        className="text-sm sm:text-base md:text-lg text-gray-300 text-center mx-auto max-w-2xl mb-12"
      >
        שאלות, הזדמנויות לשיתוף פעולה, או הצעות? צרו איתנו קשר.
      </MotionP>
      
      <MotionDiv
        variants={fadeIn('up', 0.4)}
        className="max-w-3xl mx-auto freelo-card"
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center bg-freelo-dark-purple/30 rounded-xl p-6 transition-all hover:bg-freelo-dark-purple/50"
            >
              <div className="mb-4 rounded-full w-16 h-16 flex items-center justify-center bg-freelo-dark-purple/50 glass-panel">
                {method.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-1">{method.title}</h3>
              <p className="text-xs sm:text-sm text-gray-300 text-center">{method.value}</p>
            </a>
          ))}
        </div>
      </MotionDiv>
    </MotionDiv>
  );
};

export default ContactUs;
