
import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { MotionDiv, MotionH2, MotionP, fadeIn } from './motion';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const EventCarousel: React.FC = () => {
  const events = [
    {
      title: "מסיבות BDSM",
      description: "התחברו עם אנשים בעלי תפיסות דומות בסביבה בטוחה ומכילה.",
      image: "/lovable-uploads/1a6546ac-b049-4d2d-ac1b-3a98be71f26d.png"
    },
    {
      title: "מסיבות פטיש",
      description: "חקרו את העולם המרתק של פטישים בסביבה פתוחה ומקבלת.",
      image: "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "מסיבות ליברליות",
      description: "הצטרפו למפגשים חברתיים עם אנשים פתוחים ושוברי מוסכמות.",
      image: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "מסיבות סווינגרס",
      description: "גלו מרחב בטוח לזוגות המעוניינים לחקור ולהרחיב את גבולותיהם.",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "אורגיות",
      description: "אירועים אינטימיים המאפשרים ביטוי עצמי ומיני באווירה מכבדת.",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "מאנצ'ים",
      description: "מפגשים חברתיים לא-מיניים לשיתוף ידע ודיון בקהילת ה-BDSM.",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "מפגשי פולי",
      description: "קהילה תומכת לאנשים המקיימים מערכות יחסים פוליאמוריות.",
      image: "https://images.unsplash.com/photo-1522543558187-768b6df7c25c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "כירבוליות",
      description: "מפגשי כירבול המספקים מרחב בטוח למגע לא-מיני והרפיה.",
      image: "https://images.unsplash.com/photo-1516914589923-f105f1535f88?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "סדנאות",
      description: "למדו מיומנויות ותרגלו בסביבה תומכת תחת הדרכה מקצועית.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "סדנאות טנטרה לזוגות",
      description: "גלו את עומק החיבור האינטימי דרך פרקטיקות עתיקות.",
      image: "https://images.unsplash.com/photo-1566228015668-4c45dbc4e2f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "הופעות",
      description: "צפו באמנות אלטרנטיבית מרהיבה וחוויות בימתיות ייחודיות.",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "פסטיבלים",
      description: "השתתפו באירועים רב-יומיים של חגיגה, למידה והתחברות.",
      image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "תערוכות",
      description: "צפו בעבודות אמנות שחוקרות את המיניות ואת הגוף בדרכים חדשניות.",
      image: "https://images.unsplash.com/photo-1594122230689-45899d9e6f69?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (autoplay) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
      }, 3000);
    }
    
    return () => clearInterval(interval);
  }, [autoplay, events.length]);

  const nextSlide = () => {
    setAutoplay(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
  };

  const prevSlide = () => {
    setAutoplay(false);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + events.length) % events.length);
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
        className="relative max-w-4xl mx-auto px-4"
      >
        <div className="absolute inset-0 bg-freelo-card-bg rounded-2xl border border-white/10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-freelo-gradient-start to-freelo-gradient-end opacity-10" />
          
          <div className="h-full flex items-center justify-center p-6">
            <div className="text-center">
              <div className="mb-4 relative h-40 w-full overflow-hidden rounded-xl">
                <img 
                  src={events[currentIndex].image} 
                  alt={events[currentIndex].title} 
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold shimmer-text mb-4">
                {events[currentIndex].title}
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-300 max-w-lg mx-auto">
                {events[currentIndex].description}
              </p>
            </div>
          </div>
          
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all"
            aria-label="האירוע הקודם"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all"
            aria-label="האירוע הבא"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
          
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {events.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setAutoplay(false);
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-freelo-bright-pink w-4' : 'bg-white/30'
                }`}
                aria-label={`עבור לאירוע ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </MotionDiv>
    </MotionDiv>
  );
};

export default EventCarousel;
