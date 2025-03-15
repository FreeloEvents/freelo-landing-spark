
import React from 'react';
import { Users, Calendar, ListChecks } from 'lucide-react';
import { MotionDiv, MotionH2, MotionP, fadeIn, staggerContainer } from './motion';

const Stats: React.FC = () => {
  const stats = [
    {
      icon: <Users className="w-10 h-10 text-freelo-soft-purple" />,
      value: "3433",
      label: "חברי קהילה"
    },
    {
      icon: <Calendar className="w-10 h-10 text-freelo-bright-pink" />,
      value: "+150",
      label: "מארגני אירועים"
    },
    {
      icon: <ListChecks className="w-10 h-10 text-freelo-soft-purple" />,
      value: "+1000",
      label: "אירועים שפורסמו בשנה האחרונה"
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
        className="text-3xl md:text-4xl font-bold text-center mb-2"
      >
        ה<span className="shimmer-text">מספרים</span> שלנו
      </MotionH2>
      
      <MotionP
        variants={fadeIn('up', 0.3)}
        className="text-gray-300 text-center mx-auto max-w-2xl mb-12"
      >
        אלפי חיבורים שכבר נוצרו דרך הרשת שלנו
      </MotionP>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {stats.map((stat, index) => (
          <MotionDiv
            key={index}
            variants={fadeIn('up', 0.3 + index * 0.1)}
            className="freelo-card flex flex-col items-center text-center"
          >
            <div className="mb-4 rounded-full w-20 h-20 flex items-center justify-center bg-freelo-dark-purple/50 glass-panel">
              {stat.icon}
            </div>
            <h3 className="text-4xl font-bold mb-1 shimmer-text">{stat.value}</h3>
            <p className="text-gray-300">{stat.label}</p>
          </MotionDiv>
        ))}
      </div>
    </MotionDiv>
  );
};

export default Stats;
