
import React from 'react';
import { Users } from 'lucide-react';
import { MotionDiv, MotionH2, MotionP, fadeIn } from './motion';

const AboutUs: React.FC = () => {
  return (
    <MotionDiv
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
      
      <div className="max-w-3xl mx-auto">
        <MotionDiv
          variants={fadeIn('up', 0.3)}
          className="freelo-card p-6 md:p-8 mt-8"
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-freelo-gradient-start/20 flex items-center justify-center">
              <Users className="w-8 h-8 text-freelo-bright-pink" />
            </div>
          </div>
          
          <MotionP
            variants={fadeIn('up', 0.4)}
            className="text-sm sm:text-base md:text-lg leading-relaxed text-center mb-4"
          >
            אנחנו שתי נשים מתוך הקהילה, שהבנו מניסיון אישי כמה קשה למצוא אירועים ופעילויות מהעולמות האלטרנטיביים והאינטימיים כשהכל מפוזר ולא נגיש. מתוך התסכול והצורך הזה נולד הרעיון של Freelo – פלטפורמה שמרכזת במקום אחד ברור ופשוט את כל סוגי האירועים שהקהילות האלטרנטיביות בארץ צריכות.
          </MotionP>
          
          <MotionP
            variants={fadeIn('up', 0.5)}
            className="text-sm sm:text-base md:text-lg leading-relaxed text-center mb-4"
          >
            הרצון להנגיש, לחבר ולפתח את הקהילות שאנחנו חלק מהן הוא מה שמניע אותנו יום-יום, ואנחנו ממשיכות לפעול וליצור כדי ש-Freelo תהפוך לבית אמיתי, מזמין ומכיל לכל מי שרוצה לחקור, להתפתח ולהיות חלק מהקהילות האלטרנטיביות והמתפתחות בישראל.
          </MotionP>
          
          <MotionP
            variants={fadeIn('up', 0.6)}
            className="text-sm sm:text-base md:text-lg leading-relaxed text-center font-medium text-freelo-bright-pink"
          >
            אנחנו כאן בשבילכם ובשביל הקהילה, ומבטיחות להמשיך לגדול ביחד אתכם.
          </MotionP>
        </MotionDiv>
      </div>
    </MotionDiv>
  );
};

export default AboutUs;
