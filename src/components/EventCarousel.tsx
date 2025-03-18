
import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { MotionDiv, MotionH2, MotionP, fadeIn } from './motion';

const EventCarousel: React.FC = () => {
  const events = [
    "מסיבות פטיש",
    "מסיבות ליברליות",
    "מסיבות סווינגרס",
    "אורגיות",
    "מסיבות BDSM",
    "מאנצ'ים",
    "מפגשי פולי",
    "כירבוליות",
    "סדנאות",
    "זוגות סדנאות טנטרה",
    "הופעות",
    "פסטיבלים",
    "תערוכות"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  // Calculate how many cards to show at once based on screen size
  const getVisibleCards = () => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 640 ? 1 : window.innerWidth < 768 ? 2 : 3;
    }
    return 3; // Default for SSR
  };
  
  const [visibleCards, setVisibleCards] = useState(getVisibleCards());
  
  useEffect(() => {
    const handleResize = () => {
      setVisibleCards(getVisibleCards());
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (autoplay) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % (events.length - visibleCards + 1));
      }, 3000);
    }
    
    return () => clearInterval(interval);
  }, [autoplay, events.length, visibleCards]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= events.length - visibleCards ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex <= 0 ? events.length - visibleCards : prevIndex - 1
    );
  };

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
        גלו <span className="shimmer-text">אירועים</span> עבורכם
      </MotionH2>
      
      <MotionP
        variants={fadeIn('up', 0.3)}
        className="text-sm sm:text-base md:text-lg text-gray-300 text-center mx-auto max-w-2xl mb-12"
      >
        אנו אוצרים מגוון רחב של האירועים המרגשים ביותר בקהילה
      </MotionP>
      
      <MotionDiv
        variants={fadeIn('up', 0.4)}
        className="relative max-w-6xl mx-auto px-4"
        onMouseEnter={() => setAutoplay(false)}
        onMouseLeave={() => setAutoplay(true)}
        ref={carouselRef}
      >
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(${currentIndex * (100 / visibleCards)}%)` }}
          >
            {events.map((event, index) => (
              <div 
                key={index}
                className={`flex-shrink-0 px-2`}
                style={{ width: `${100 / visibleCards}%` }}
              >
                <div className="h-64 bg-freelo-card-bg rounded-2xl border border-white/10 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-freelo-gradient-start to-freelo-gradient-end opacity-10" />
                  
                  <div className="h-full flex items-center justify-center p-6">
                    <div className="text-center">
                      <h3 className="text-xl sm:text-2xl font-bold shimmer-text mb-4">{event}</h3>
                      <p className="text-xs sm:text-sm text-gray-300 max-w-lg mx-auto">
                        התחברו עם אנשים בעלי תפיסות דומות בסביבה בטוחה ומכילה
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <button 
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all z-10"
          aria-label="האירוע הקודם"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        
        <button 
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all z-10"
          aria-label="האירוע הבא"
        >
          <ArrowRight className="w-5 h-5" />
        </button>
        
        <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: events.length - visibleCards + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
              }}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? 'bg-freelo-bright-pink w-4' : 'bg-white/30'
              }`}
              aria-label={`עבור לאירוע ${index + 1}`}
            />
          ))}
        </div>
      </MotionDiv>
    </MotionDiv>
  );
};

export default EventCarousel;
