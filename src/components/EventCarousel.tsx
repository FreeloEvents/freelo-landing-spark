
import React, { useState, useEffect } from 'react';
import { MotionDiv, MotionH2, MotionP, fadeIn } from './motion';
import { Skeleton } from '@/components/ui/skeleton';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

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

  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>(Array(events.length).fill(false));
  const [autoplayInterval, setAutoplayInterval] = useState<NodeJS.Timeout | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Handle image loading state
  const handleImageLoad = (index: number) => {
    const newImagesLoaded = [...imagesLoaded];
    newImagesLoaded[index] = true;
    setImagesLoaded(newImagesLoaded);
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
        className="w-full max-w-5xl mx-auto"
      >
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full"
          onMouseEnter={() => {
            if (autoplayInterval) {
              clearInterval(autoplayInterval);
              setAutoplayInterval(null);
            }
          }}
          onMouseLeave={() => {
            if (!autoplayInterval) {
              const interval = setInterval(() => {
                setActiveIndex((prev) => (prev + 1) % events.length);
              }, 3000);
              setAutoplayInterval(interval);
            }
          }}
        >
          <CarouselContent>
            {events.map((event, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="bg-freelo-card-bg border border-white/10 overflow-hidden h-full">
                    <CardContent className="flex flex-col p-6 h-full">
                      <div className="relative aspect-[3/2] overflow-hidden rounded-lg mb-4">
                        {!imagesLoaded[index] && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Skeleton className="h-full w-full bg-white/5" />
                          </div>
                        )}
                        <img
                          src={event.image}
                          alt={event.title}
                          className={`w-full h-full object-cover transition-opacity duration-300 ${
                            imagesLoaded[index] ? 'opacity-100' : 'opacity-0'
                          }`}
                          onLoad={() => handleImageLoad(index)}
                          onError={(e) => {
                            console.error(`Failed to load image for ${event.title}`);
                            // Fallback image if needed
                            e.currentTarget.src = "https://images.unsplash.com/photo-1594122230689-45899d9e6f69?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                            handleImageLoad(index);
                          }}
                        />
                      </div>
                      <h3 className="text-xl font-bold shimmer-text mb-2">{event.title}</h3>
                      <p className="text-sm text-gray-300">{event.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute -left-4 top-1/2 -translate-y-1/2 z-10">
            <CarouselPrevious className="bg-white/10 hover:bg-white/20 border-white/20" />
          </div>
          <div className="absolute -right-4 top-1/2 -translate-y-1/2 z-10">
            <CarouselNext className="bg-white/10 hover:bg-white/20 border-white/20" />
          </div>
        </Carousel>
        
        <div className="flex justify-center gap-2 mt-6">
          {events.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === activeIndex ? 'bg-freelo-bright-pink w-4' : 'bg-white/30'
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
