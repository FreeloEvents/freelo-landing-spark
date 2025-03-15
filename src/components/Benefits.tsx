
import React from 'react';
import { Shield, Heart, Globe, Clock, Lock, ScanSearch } from 'lucide-react';
import { MotionDiv, MotionH2, MotionP, fadeIn, staggerContainer } from './motion';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <Shield className="w-8 h-8 text-freelo-bright-pink" />,
      title: "בטיחות מאומתת",
      description: "כל האירועים והמארגנים נבדקים ביסודיות לבטיחות ואמינות."
    },
    {
      icon: <ScanSearch className="w-8 h-8 text-freelo-soft-purple" />,
      title: "גילוי חכם",
      description: "האלגוריתם שלנו עוזר לכם למצוא אירועים המותאמים לתחומי העניין הספציפיים שלכם."
    },
    {
      icon: <Heart className="w-8 h-8 text-freelo-bright-pink" />,
      title: "קהילה מכילה",
      description: "סביבה מזמינה לכל הזהויות, האוריינטציות וסגנונות היחסים."
    },
    {
      icon: <Globe className="w-8 h-8 text-freelo-soft-purple" />,
      title: "אירועים בכל העולם",
      description: "גישה לאירועים מקומיים ובינלאומיים בערים מרכזיות."
    },
    {
      icon: <Lock className="w-8 h-8 text-freelo-bright-pink" />,
      title: "מיקוד בפרטיות",
      description: "המידע האישי שלכם נשאר מאובטח ולעולם לא משותף ללא הרשאה."
    },
    {
      icon: <Clock className="w-8 h-8 text-freelo-soft-purple" />,
      title: "עדכונים בזמן אמת",
      description: "התראות מיידיות על אירועים חדשים התואמים את ההעדפות שלכם."
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
        יתרונות <span className="shimmer-text">מרכזיים</span>
      </MotionH2>
      
      <MotionP
        variants={fadeIn('up', 0.3)}
        className="text-gray-300 text-center mx-auto max-w-2xl mb-12"
      >
        גלו מה הופך את פרילו לפלטפורמה האולטימטיבית לאירועים אלטרנטיביים
      </MotionP>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {benefits.map((benefit, index) => (
          <MotionDiv
            key={index}
            variants={fadeIn('up', 0.3 + index * 0.1)}
            className="freelo-card flex items-start"
          >
            <div className="ml-4 p-3 rounded-lg bg-freelo-dark-purple/50 glass-panel">
              {benefit.icon}
            </div>
            <div className="text-right">
              <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-300 text-sm">{benefit.description}</p>
            </div>
          </MotionDiv>
        ))}
      </div>
    </MotionDiv>
  );
};

export default Benefits;
