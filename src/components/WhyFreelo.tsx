
import React from 'react';
import { Search, Users, Calendar } from 'lucide-react';
import { MotionDiv, MotionH2, MotionP, fadeIn, staggerContainer } from './motion';

const WhyFreelo: React.FC = () => {
  const features = [
    {
      icon: <Search className="w-10 h-10 text-freelo-bright-pink" />,
      title: "גילוי אירועים מתקדם",
      description: "מצאו אירועים שמתאימים בדיוק לתחומי העניין וההעדפות שלכם."
    },
    {
      icon: <Users className="w-10 h-10 text-freelo-soft-purple" />,
      title: "חברות בקהילה",
      description: "התחברו עם אנשים בעלי תפיסות דומות בקהילות בלעדיות."
    },
    {
      icon: <Calendar className="w-10 h-10 text-freelo-bright-pink" />,
      title: "לוח אירועים מקיף",
      description: "מסיבות, סדנאות, מפגשים ועוד - הכל במקום אחד."
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
        למה להצטרף ל<span className="shimmer-text">פרילו</span>?
      </MotionH2>
      
      <MotionP
        variants={fadeIn('up', 0.3)}
        className="text-gray-300 text-center mx-auto max-w-2xl mb-12"
      >
        הפלטפורמה שמחברת אותך לקהילה ולאירועים שמתאימים לרצונות שלך
      </MotionP>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <MotionDiv
            key={index}
            variants={fadeIn('up', 0.3 + index * 0.1)}
            className="freelo-card flex flex-col items-center text-center"
          >
            <div className="mb-4 rounded-full w-20 h-20 flex items-center justify-center bg-freelo-dark-purple/50 glass-panel">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
            <p className="text-gray-300">{feature.description}</p>
          </MotionDiv>
        ))}
      </div>
    </MotionDiv>
  );
};

export default WhyFreelo;
