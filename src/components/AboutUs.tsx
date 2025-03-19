
import React from 'react';
import { MotionDiv, MotionH2, MotionP, fadeIn, staggerContainer } from './motion';

const AboutUs: React.FC = () => {
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
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-2"
      >
        מי <span className="shimmer-text">אנחנו</span>?
      </MotionH2>
      
      <MotionDiv
        variants={fadeIn('up', 0.3)}
        className="max-w-3xl mx-auto mt-8 freelo-card p-6 sm:p-8"
      >
        <MotionP className="text-sm sm:text-base md:text-lg text-gray-200 mb-4 leading-relaxed">
          אנחנו שתי נשים מתוך הקהילה, שחוו על בשרן את הקושי במציאת אירועים מהעולם האלטרנטיבי והאינטימי. מתוך הצורך האישי הזה הקמנו את Freelo – פלטפורמה שתרכז את כל האירועים במקום ברור, פשוט ונגיש לכולם.
        </MotionP>
        
        <MotionP className="text-sm sm:text-base md:text-lg text-gray-200 font-medium">
          החלום שלנו הוא לבנות בית לקהילה האלטרנטיבית בארץ, ואנחנו כאן להמשיך ולפתח אותו ביחד אתכם.
        </MotionP>
      </MotionDiv>
    </MotionDiv>
  );
};

export default AboutUs;
