import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { MotionDiv, MotionH2, MotionP, fadeIn } from './motion';

const EventCarousel: React.FC = () => {
  const events = [
    {
      title: "מסיבות פטיש",
      description: "חקרו את עולם הפטיש והקינק באירועים עם אווירה בטוחה, פתוחה ומכבדת"
    },
    {
      title: "מסיבות סווינגרס",
      description: "בואו לחוות חופש זוגי במפגשים דיסקרטיים ומכילים, עם אנשים בעלי ראש פתוח"
    },
    {
      title: "אורגיות",
      description: "אירועים קבוצתיים אינטימיים ובטוחים, עם כללי הסכמה ברורים והקפדה על פרטיות"
    },
    {
      title: "סדנאות",
      description: "סדנאות מקצועיות לחקירה מינית, תקשורת זוגית, התפתחות אישית ועוד"
    },
    {
      title: "הופעות",
      description: "אירועים מיוחדים עם מופעי אמנות וביטוי עצמי בנושאי מיניות אלטרנטיבית"
    },
    {
      title: "מסיבות BDSM",
      description: "חוו מפגשי BDSM עם דגש על הסכמה, בטיחות והנאה הדדית בקהילה תומכת"
    },
    {
      title: "מאנצ'ים",
      description: "פגשו את קהילת ה-BDSM במפגשים חברתיים לא-מיניים לשיחה, למידה וחיבור"
    },
    {
      title: "מפגשי פולי",
      description: "התחברו עם קהילת הפולי לתמיכה, שיתוף חוויות, ולמידה על מערכות יחסים מרובות"
    },
    {
      title: "כירבוליות",
      description: "השתתפו במפגשי מגע לא-מיני ואינטימיות גופנית בסביבה בטוחה ומכילה"
    },
    {
      title: "סדנאות טנטרה לזוגות",
      description: "העמיקו את החיבור הזוגי דרך תרגול טנטרה ועבודה על אינטימיות ומיניות"
    },
    {
      title: "פסטיבלים",
      description: "חגגו עם הקהילה באירועים גדולים המשלבים מוזיקה, אמנות ותרבות אלטרנטיבית"
    },
    {
      title: "תערוכות",
      description: "בקרו בתערוכות אמנות העוסקות במיניות, זהות, וביטוי עצמי בגישה פתוחה"
    }
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
                // In RTL, we should move from left to right (previous in LTR context)
                setCurrentIndex((prevIndex) =>
                    prevIndex >= events.length - visibleCards ? 0 : prevIndex + 1
                );
            }, 3000);
        }

        return () => clearInterval(interval);
    }, [autoplay, events.length, visibleCards]);

    // For RTL, next and prev are flipped
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
      className="py-16 px-4 bg-freelo-dark-purple"
    >
      <MotionH2
        variants={fadeIn('up', 0.2)}
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-2"
      >
        גלו <span className="bg-gradient-to-r from-freelo-bright-pink via-freelo-gradient-mid to-freelo-soft-purple bg-clip-text text-transparent">אירועים</span> עבורכם
      </MotionH2>
      
      <MotionP
        variants={fadeIn('up', 0.3)}
        className="text-sm sm:text-base md:text-lg text-gray-300 text-center mx-auto max-w-2xl mb-12"
      >
        אנו אוצרים מגוון רחב של האירועים המרגשים ביותר בקהילה
      </MotionP>
      
      <MotionDiv
        variants={fadeIn('up', 0.4)}
        className="relative max-w-6xl mx-auto px-4 dir-rtl"
        onMouseEnter={() => setAutoplay(false)}
        onMouseLeave={() => setAutoplay(true)}
        ref={carouselRef}
      >
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(${-currentIndex * (100 / visibleCards)}%)` }}
          >
            {events.map((event, index) => (
              <div 
                key={index}
                className={`flex-shrink-0 px-2`}
                style={{ width: `${100 / visibleCards}%` }}
              >
                <div className="h-64 bg-freelo-dark-purple rounded-2xl border border-white/10 overflow-hidden hover:border-freelo-bright-pink/40 transition-all duration-300">
                  <div className="h-full flex items-center justify-center p-6">
                    <div className="text-center">
                      <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-freelo-bright-pink via-freelo-gradient-mid to-freelo-soft-purple bg-clip-text text-transparent mb-4">
                        {event.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-300 max-w-lg mx-auto">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <button 
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all z-10"
          aria-label="האירוע הבא"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
        
        <button 
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all z-10"
          aria-label="האירוע הקודם"
        >
          <ChevronLeft className="w-5 h-5" />
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
