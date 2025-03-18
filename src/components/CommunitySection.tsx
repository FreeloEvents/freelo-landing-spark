
import React from 'react';
import { MotionDiv, MotionH2, MotionP, MotionA, fadeIn } from './motion';

const CommunitySection: React.FC = () => {
  return (
    <MotionDiv
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="py-16 px-4 text-center"
    >
      <MotionH2
        variants={fadeIn('up', 0.2)}
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-2"
      >
        הצטרפו ל<span className="shimmer-text">קהילה</span>
      </MotionH2>
      
      <MotionP
        variants={fadeIn('up', 0.3)}
        className="text-sm sm:text-base md:text-lg text-gray-300 mx-auto max-w-2xl mb-10"
      >
        התחברו עם אלפי אנשים בעלי תפיסות דומות. ערוץ הטלגרם שלנו כבר מחבר בין אנשים.
      </MotionP>
      
      <MotionA
        variants={fadeIn('up', 0.4)}
        href="https://t.me/ENMeventsIL"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block freelo-button text-sm sm:text-base"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        הצטרפו לקהילת הטלגרם שלנו
      </MotionA>
      
      <MotionDiv 
        variants={fadeIn('up', 0.5)}
        className="mt-6 text-xs sm:text-sm text-gray-400"
      >
        מעל 3,000 חברים וגדלים מידי יום
      </MotionDiv>
    </MotionDiv>
  );
};

export default CommunitySection;
