
import React from 'react';
import { MotionDiv, MotionH2, MotionP, MotionA, fadeIn } from './motion';
import { useTranslation } from '@/utils/translations';

const CommunitySection: React.FC = () => {
  const { t, language } = useTranslation();
  
  return (
    <MotionDiv
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="py-16 px-4 text-center"
      dir={language === 'he' ? 'rtl' : 'ltr'}
    >
      <MotionH2
        variants={fadeIn('up', 0.2)}
        className="text-3xl md:text-4xl font-bold text-center mb-2"
      >
        {language === 'he' ? (
          <>
            <span className="shimmer-text">הקהילה</span> הצטרפו אל
          </>
        ) : (
          <>
            Join the <span className="shimmer-text">Community</span>
          </>
        )}
      </MotionH2>
      
      <MotionP
        variants={fadeIn('up', 0.3)}
        className="text-gray-300 mx-auto max-w-2xl mb-10"
      >
        {t('joinCommunityDesc')}
      </MotionP>
      
      <MotionA
        variants={fadeIn('up', 0.4)}
        href="https://t.me/ENMeventsisrael"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block freelo-button"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {t('telegramLink')}
      </MotionA>
      
      <MotionDiv 
        variants={fadeIn('up', 0.5)}
        className="mt-6 text-sm text-gray-400"
      >
        {t('membersCount')}
      </MotionDiv>
    </MotionDiv>
  );
};

export default CommunitySection;
