
import React from 'react';
import { Mail, MessageCircle } from 'lucide-react';
import { MotionDiv, MotionH2, MotionP, fadeIn, staggerContainer } from './motion';

const ContactUs: React.FC = () => {
  const contactMethods = [
    {
      icon: <MessageCircle className="w-8 h-8 text-freelo-soft-purple" />,
      title: "Telegram",
      value: "ENMeventsIL",
      link: "https://t.me/ENMeventsisrael"
    },
    {
      icon: <Mail className="w-8 h-8 text-freelo-bright-pink" />,
      title: "Email",
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
        className="text-3xl md:text-4xl font-bold text-center mb-2 shimmer-text"
      >
        Get In Touch
      </MotionH2>
      
      <MotionP
        variants={fadeIn('up', 0.3)}
        className="text-gray-300 text-center mx-auto max-w-2xl mb-12"
      >
        Questions, partnership opportunities, or suggestions? Reach out to us.
      </MotionP>
      
      <MotionDiv
        variants={fadeIn('up', 0.4)}
        className="max-w-3xl mx-auto freelo-card"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
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
              <h3 className="text-xl font-bold mb-1">{method.title}</h3>
              <p className="text-gray-300 text-center">{method.value}</p>
            </a>
          ))}
        </div>
      </MotionDiv>
    </MotionDiv>
  );
};

export default ContactUs;
