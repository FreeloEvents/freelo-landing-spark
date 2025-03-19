
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { MotionDiv, MotionH2, MotionP, fadeIn } from './motion';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

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

  // Use the shadcn/ui Carousel component instead of custom implementation
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
        className="relative max-w-6xl mx-auto px-8 dir-rtl"
      >
        <Carousel
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {events.map((event, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 sm:basis-1/2 md:basis-1/3">
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
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-end gap-2 mt-4">
            <CarouselPrevious className="relative inline-flex right-auto left-auto top-auto -translate-y-0 mr-2" />
            <CarouselNext className="relative inline-flex right-auto left-auto top-auto -translate-y-0" />
          </div>
        </Carousel>
      </MotionDiv>
    </MotionDiv>
  );
};

export default EventCarousel;
