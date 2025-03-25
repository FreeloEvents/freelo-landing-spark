
import React, { useState, useEffect } from 'react';
import { MotionDiv, MotionP, MotionH2, fadeIn } from './motion';

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const Countdown: React.FC = () => {
  const targetDate = new Date('June 1, 2025 00:00:00').getTime();
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  // Helper function to add leading zeros
  const formatNumber = (num: number): string => {
    return num < 10 ? `0${num}` : `${num}`;
  };

  return (
    <MotionDiv
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="py-16 px-4 relative"
    >
      <MotionH2
        variants={fadeIn('up', 0.2)}
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12"
      >
        משיקים בעוד
      </MotionH2>

      <MotionDiv
        variants={fadeIn('up', 0.3)}
        className="flex justify-center mb-8"
      >
        <div className="flex flex-wrap sm:flex-nowrap justify-center items-center gap-1 sm:gap-2">
          {/* Days */}
          <div className="text-center">
            <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-freelo-bright-pink">
              {formatNumber(timeLeft.days)}
            </div>
            <div className="text-xs uppercase mt-1 text-gray-400">ימים</div>
          </div>
          
          {/* Separator */}
          <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-freelo-bright-pink mx-1 sm:mx-2">:</div>
          
          {/* Hours */}
          <div className="text-center">
            <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-freelo-bright-pink">
              {formatNumber(timeLeft.hours)}
            </div>
            <div className="text-xs uppercase mt-1 text-gray-400">שעות</div>
          </div>
          
          {/* Separator */}
          <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-freelo-bright-pink mx-1 sm:mx-2">:</div>
          
          {/* Minutes */}
          <div className="text-center">
            <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-freelo-bright-pink">
              {formatNumber(timeLeft.minutes)}
            </div>
            <div className="text-xs uppercase mt-1 text-gray-400">דקות</div>
          </div>
          
          {/* Separator */}
          <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-freelo-bright-pink mx-1 sm:mx-2">:</div>
          
          {/* Seconds */}
          <div className="text-center">
            <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-freelo-bright-pink">
              {formatNumber(timeLeft.seconds)}
            </div>
            <div className="text-xs uppercase mt-1 text-gray-400">שניות</div>
          </div>
        </div>
      </MotionDiv>

      <MotionP
        variants={fadeIn('up', 0.4)}
        className="text-xs sm:text-sm md:text-base text-center text-gray-300 mt-8"
      >
        הצטרפו לרשימת ההמתנה שלנו היום כדי לקבל גישה מוקדמת בלעדית.
      </MotionP>
    </MotionDiv>
  );
};

export default Countdown;
