
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Info } from 'lucide-react';
import { MotionDiv, MotionH2, MotionP, fadeIn } from './motion';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import { Card } from "./ui/card";

interface EventType {
  id: number;
  title: string;
  shortDescription: string;
  fullDescription: string;
}

const EventCarousel: React.FC = () => {
  const events: EventType[] = [
    {
      id: 0,
      title: "מסיבות פטיש",
      shortDescription: "מסיבה מינית וליברלית, בה כל פטיש או קינק מתקבל באהבה.",
      fullDescription: "מרחב בטוח וסקרן בו אפשר להגשים פנטזיות, להתלבש בצורה מגרה וייחודית, ולהתנסות בסשנים עם ציוד מקצועי, אזורים מובנים ומיטות מאובזרות. המסיבות מתאימות גם למי שרק מתחילים לגלות את עולם הפטיש וגם לוותיקים שמרגישים בבית."
    },
    {
      id: 1,
      title: "מסיבות ליברליות",
      shortDescription: "מסיבות מגוונות באווירה חופשית, פתוחה ומכילה.",
      fullDescription: "אירועים שבהם הגבולות פתוחים וכל אחת ואחד בוחרים את הדרך האישית שלהם לחגוג – דרך ריקוד, מגע, חיבור או רק נוכחות. המסיבות משלבות מוזיקה, מתחמים אינטימיים (לעיתים), ואנשים פתוחים שמכבדים גבולות ותקשורת. אידיאלי גם לאנשים חדשים בקהילה."
    },
    {
      id: 2,
      title: "מסיבות סווינגרס",
      shortDescription: "לזוגות שמבקשים לפתוח את הקשר ולחקור.",
      fullDescription: "מרחבים זוגיים-חברתיים עם אפשרות להיפגש, להתמנגל, ולהשתובב. המסיבות מתקיימות באווירה חמה עם מוזיקה, בר, מתחמים אינטימיים ואנשים שמבינים את החשיבות של תקשורת פתוחה וכבוד הדדי. חלק מהאירועים מיועדים רק לזוגות, ואחרים פתוחים גם ליחידים נבחרים."
    },
    {
      id: 3,
      title: "אורגיות",
      shortDescription: "מרחב מיני חופשי, רב-משתתפים, מונחה או ספונטני.",
      fullDescription: "מפגשים שבהם מיניות קבוצתית מתאפשרת באופן בטוח, חופשי ומכבד. חלק מהאורגיות כוללות הנחייה ומבנה, אחרות מאפשרות זרימה טבעית. תמיד עם דגש על הסכמה, גבולות ברורים, ותחושת ביטחון. מתאימות למי שמחפשים חוויה שונה עם אנשים כנים ופתוחים."
    },
    {
      id: 4,
      title: "מסיבות BDSM",
      shortDescription: "מסיבות חושניות לחובבי שליטה, כאב, ומשחקים.",
      fullDescription: "פליי-פארטי הוא מרחב שבו מתקיימים סשנים של שליטה וכניעה – עם כללי סייף-וורד, אזורי פליי מקצועיים, וחוקי מרחב ברורים. חלק מהמסיבות כוללות גם מיניות, וחלקן ממוקדות במשחקי שליטה בלבד. מתאימות לחדשים ולמנוסים, באווירה שמזמינה הקשבה, חקירה וביטחון."
    },
    {
      id: 5,
      title: "מאנצ'ים",
      shortDescription: "מפגשים חברתיים לא-מיניים לקהילת ה-BDSM.",
      fullDescription: "הזדמנות להכיר, לשאול ולהיות חלק מקהילה – בלי משחקים, מגע או מיניות. מתקיימים בבתי קפה או פאבים בלבוש רגיל, עם דגש על היכרות, קבלת מידע, ויצירת חיבורים בטוחים ונטולי לחץ."
    },
    {
      id: 6,
      title: "מפגשי פולי",
      shortDescription: "מפגשים קהילתיים לאנשים א-מונוגמיים ופוליאמוריים.",
      fullDescription: "אירועים מגוונים – ממינגלים, מסיבות, ערבי שיח ועד משחקי היכרות – לאנשים שחיים או מתעניינים בפוליאמוריה וא-מונוגמיה. מקום להכיר, לשתף, לדבר על אהבה, קנאה, תקשורת ומבנה מערכות יחסים."
    },
    {
      id: 7,
      title: "כירבוליות",
      shortDescription: "מרחב רך, בטוח ולא-מיני למגע וחיבוק.",
      fullDescription: "מפגשים קבוצתיים שמזמינים חיבור דרך מגע נעים שאינו מיני בדרך כלל מונחה עם תרגילי חיבור וגבולות. החוקים ברורים – הכול נעשה רק מתוך הסכמה ותקשורת פתוחה."
    },
    {
      id: 8,
      title: "סדנאות",
      shortDescription: "למידה חווייתית בנושאים של מיניות, קשרים, תקשורת והתפתחות.",
      fullDescription: "מגוון סדנאות ליחידים ולזוגות – עם מנחים מקצועיים, אווירה פתוחה, ותכנים מעשיים. נושאים כמו מיניות מודעת, תקשורת זוגית, חקירה עצמית, גבולות, ועוד. מתאים למי שרוצה ללמוד, לשאול, להתנסות ולהעמיק."
    },
    {
      id: 9,
      title: "סדנאות טנטרה לזוגות",
      shortDescription: "חיבור דרך נשימה, מגע, נוכחות ואנרגיה.",
      fullDescription: "מרחב אינטימי לזוגות וליחידים שמבקשים להתחבר לעומק דרך תרגולים טנטריים – מבט, נשימה, מגע מודע ושיח מקרב. חלק מהסדנאות כוללות עירום או מגע מיני, בהתאם לגישה ולגבולות של המשתתפים. הכול מתוך כבוד, הקשבה והסכמה."
    },
    {
      id: 10,
      title: "הופעות",
      shortDescription: "שילוב של אמנות חיה באירועים – חושי, נועז ומרגש.",
      fullDescription: "מופעי שיבארי, עירום אומנותי, ריקודי על עמוד, אקרובטיקה אווירית, מוזיקה חיה ועוד. ההופעות משתלבות באירועים ומוסיפות חוויה אומנותית עמוקה וחושנית שמעוררת חיבור רגשי או מיני – בהתאם לאופי האירוע."
    },
    {
      id: 11,
      title: "פסטיבלים",
      shortDescription: "חגיגות של כמה ימים – קהילה, תוכן וחופש.",
      fullDescription: "אירועים מרובי ימים, לרוב בטבע, עם מאות משתתפים. כוללים סדנאות, הופעות, מסיבות, אזורי מגע, מתחמי מנוחה, ומרחבים להתפתחות וחיבור. מתאימים למי שרוצים לצאת מהשגרה ולהיות חלק ממשהו גדול, עמוק ומשחרר."
    },
    {
      id: 12,
      title: "תערוכות",
      shortDescription: "אמנות אירוטית, חושנית, פרובוקטיבית ומסקרנת.",
      fullDescription: "תערוכות של צילום, ציור, פרפורמנס ווידאו שמבקשות לפתוח שיח על גוף, מיניות, תשוקה ואינטימיות. חוויה אומנותית שמזמינה להתרגש, לחשוב, ולפעמים גם להרגיש קצת יותר חופשי."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedEvent, setSelectedEvent] = useState<EventType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [autoplay, setAutoplay] = useState(true);

  // Calculate how many cards to show at once based on screen size
  const getNumVisibleCards = () => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768 ? 2 : 3;
    }
    return 3; // Default for SSR
  };

  const [numVisibleCards, setNumVisibleCards] = useState(getNumVisibleCards());

  React.useEffect(() => {
    const handleResize = () => {
      setNumVisibleCards(getNumVisibleCards());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  React.useEffect(() => {
    let interval: NodeJS.Timeout;

    if (autoplay) {
      interval = setInterval(() => {
        // In RTL, next means going right to left (decrementing the index)
        nextSlide();
      }, 5000);
    }

    return () => clearInterval(interval);
  }, [autoplay, currentIndex]);

  // For RTL, next means going right to left (decrementing the index)
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      // In RTL, we move from right to left (decreasing index)
      return prevIndex <= 0 ? events.length - numVisibleCards : prevIndex - 1;
    });
  };

  // For RTL, previous means going left to right (incrementing the index)
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      // In RTL, we move from left to right (increasing index)
      return prevIndex >= events.length - numVisibleCards ? 0 : prevIndex + 1;
    });
  };

  const openEventModal = (event: EventType) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
    setAutoplay(false);
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
      >
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(${currentIndex * (100 / numVisibleCards)}%)` }}
          >
            {events.map((event) => (
              <div
                key={event.id}
                className="flex-shrink-0 px-2"
                style={{ width: `${100 / numVisibleCards}%` }}
              >
                <Card className="h-64 bg-freelo-dark-purple border border-white/10 overflow-hidden hover:border-freelo-bright-pink/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="h-full flex flex-col items-center justify-between p-6">
                    <div className="text-center">
                      <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-freelo-bright-pink via-freelo-gradient-mid to-freelo-soft-purple bg-clip-text text-transparent mb-4">
                        {event.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-300 line-clamp-2 mb-4">
                        {event.shortDescription}
                      </p>
                    </div>
                    <button
                      onClick={() => openEventModal(event)}
                      className="flex items-center gap-1 text-sm text-freelo-bright-pink hover:text-freelo-soft-purple transition-colors"
                    >
                      <span>קרא עוד</span>
                      <Info className="w-4 h-4" />
                    </button>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={prevSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all z-10"
          aria-label="האירוע הבא"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all z-10"
          aria-label="האירוע הקודם"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: events.length - numVisibleCards + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                // In RTL, the dots should be reversed to match visual flow
                setCurrentIndex(events.length - numVisibleCards - index);
              }}
              className={`w-2 h-2 rounded-full transition-all ${
                events.length - numVisibleCards - index === currentIndex
                  ? 'bg-freelo-bright-pink w-6'
                  : 'bg-white/30'
              }`}
              aria-label={`עבור לאירוע ${index + 1}`}
            />
          ))}
        </div>
      </MotionDiv>

      {/* Event Details Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="bg-freelo-dark-purple text-white border-freelo-soft-purple max-w-md mx-auto">
          {selectedEvent && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl text-center bg-gradient-to-r from-freelo-bright-pink via-freelo-gradient-mid to-freelo-soft-purple bg-clip-text text-transparent">
                  {selectedEvent.title}
                </DialogTitle>
                <DialogDescription className="text-gray-300 text-center mt-2">
                  {selectedEvent.shortDescription}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-4 text-sm text-gray-200">
                {selectedEvent.fullDescription}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </MotionDiv>
  );
};

export default EventCarousel;
