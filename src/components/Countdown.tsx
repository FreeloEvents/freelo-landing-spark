
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

  return (
    <MotionDiv
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="py-16 px-4 relative"
    >
      <MotionH2
        variants={fadeIn('up', 0.2)}
        className="text-3xl md:text-4xl font-bold text-center mb-12"
      >
        משיקים בעוד
      </MotionH2>

      <MotionDiv
        variants={fadeIn('up', 0.3)}
        className="flex flex-wrap justify-center gap-4 sm:gap-8"
      >
        {[
          { value: timeLeft.days, label: 'ימים' },
          { value: timeLeft.hours, label: 'שעות' },
          { value: timeLeft.minutes, label: 'דקות' },
          { value: timeLeft.seconds, label: 'שניות' },
        ].map((item, index) => (
          <div
            key={index}
            className="relative w-20 h-20 sm:w-28 sm:h-28 flex flex-col items-center justify-center bg-freelo-card-bg rounded-2xl border border-white/10"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-freelo-gradient-start to-freelo-gradient-end opacity-20 rounded-2xl" />
            <span className="text-3xl sm:text-4xl font-bold relative z-10">{item.value}</span>
            <span className="text-xs sm:text-sm text-gray-300 relative z-10">{item.label}</span>
          </div>
        ))}
      </MotionDiv>

      <MotionP
        variants={fadeIn('up', 0.4)}
        className="text-center text-gray-300 mt-8"
      >
        הצטרפו לרשימת ההמתנה שלנו היום כדי לקבל גישה מוקדמת בלעדית.
      </MotionP>
    </MotionDiv>
  );
};

export default Countdown;
