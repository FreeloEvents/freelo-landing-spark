
import React, { useState } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { MotionDiv, MotionH2, MotionP, fadeIn, staggerContainer } from './motion';
import ConfettiEffect from './ConfettiEffect';

interface Question {
  id: number;
  text: string;
  options: string[];
}

const Questionnaire: React.FC = () => {
  const questions: Question[] = [
    {
      id: 1,
      text: "איזה סוג אירועים מעניינים אותך במיוחד?",
      options: [
        "מסיבות גדולות (פסטיבלים, אירועי מועדונים)",
        "מפגשים אינטימיים (קבוצות עד 20 משתתפים)",
        "סדנאות לחינוך וחקירה",
        "אירועים ממוקדי BDSM (מסיבות משחק, סדנאות, וכו')",
        "מפגשי קהילה (פיקניקים, אירועים חברתיים)",
        "אירועים מקוונים (וובינרים, מפגשים וירטואליים)",
        "אחר"
      ]
    },
    {
      id: 2,
      text: "מה הכי חשוב לך כשאת/ה מחפש/ת אירוע?",
      options: [
        "פרטיות ודיסקרטיות גבוהה",
        "פרוטוקולי הסכמה ובטיחות ברורים",
        "יצירת קשרים חדשים וקהילה",
        "מיקום נוח",
        "נושא האירוע ואיכות החוויה",
        "תמחור הוגן",
        "אחר"
      ]
    },
    {
      id: 3,
      text: "באיזו תדירות את/ה משתתף/ת באירועים כאלה?",
      options: [
        "מדי שבוע",
        "מדי חודש",
        "מספר פעמים בשנה",
        "רק אירועים גדולים/מיוחדים (פסטיבלים)",
        "עדיין לא, אבל מתרגש/ת להתחיל",
        "אחר"
      ]
    },
    {
      id: 4,
      text: "איזה מידע הכי חשוב לדעת לפני אירוע?",
      options: [
        "דמוגרפיה של המשתתפים",
        "מבנה האירוע והפעילויות",
        "מי מארגן ומה המוניטין שלהם",
        "מה כלול במחיר הכרטיס",
        "קוד לבוש וציפיות התנהגות",
        "האם האירוע מכיל LGBTQ+",
        "אחר"
      ]
    },
    {
      id: 5,
      text: "מה גורם לך להרגיש הכי בנוח ובטוח באירועים כאלה?",
      options: [
        "משתתפים ומארגנים מאומתים",
        "כללים ופרוטוקולי הסכמה ברורים",
        "יכולת להתחבר עם אחרים מראש",
        "אבטחה מקצועית ופיקוח",
        "ביקורות חיוביות ממשתתפים קודמים",
        "מדיניות ללא תמונות/וידאו",
        "אחר"
      ]
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string[]>>({});
  const [showConfetti, setShowConfetti] = useState(false);

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowConfetti(true);
      setTimeout(() => {
        setShowConfetti(false);
      }, 5000);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleOptionToggle = (option: string) => {
    const questionId = questions[currentQuestion].id;
    const currentSelections = selectedAnswers[questionId] || [];
    
    // Check if option is already selected
    if (currentSelections.includes(option)) {
      // Remove the option
      setSelectedAnswers({
        ...selectedAnswers,
        [questionId]: currentSelections.filter(item => item !== option)
      });
    } else {
      // Add the option
      setSelectedAnswers({
        ...selectedAnswers,
        [questionId]: [...currentSelections, option]
      });
    }
  };

  const isOptionSelected = (option: string) => {
    const questionId = questions[currentQuestion].id;
    return selectedAnswers[questionId]?.includes(option) || false;
  };

  const hasSelectedOptions = () => {
    const questionId = questions[currentQuestion].id;
    return (selectedAnswers[questionId]?.length || 0) > 0;
  };

  const isLastQuestion = currentQuestion === questions.length - 1;
  const question = questions[currentQuestion];

  return (
    <MotionDiv
      variants={staggerContainer(0.1, 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="py-16 px-4"
    >
      <MotionH2
        variants={fadeIn('up', 0.2)}
        className="text-3xl md:text-4xl font-bold text-center mb-2"
      >
        מצאו את האירועים ה<span className="shimmer-text">מושלמים</span> עבורכם
      </MotionH2>
      
      <MotionP
        variants={fadeIn('up', 0.3)}
        className="text-gray-300 text-center mx-auto max-w-2xl mb-12"
      >
        ענו על מספר שאלות קצרות כדי לעזור לנו להתאים את המלצות האירועים שלכם
      </MotionP>
      
      <MotionDiv
        variants={fadeIn('up', 0.4)}
        className="max-w-3xl mx-auto"
      >
        <div className="freelo-card relative overflow-hidden">
          <div className="pb-8">
            <div className="flex justify-between items-center mb-6">
              <div className="flex space-x-1">
                {questions.map((_, index) => (
                  <div 
                    key={index} 
                    className={`w-2 h-2 rounded-full ${
                      index === currentQuestion ? 'bg-freelo-bright-pink' : 
                      index < currentQuestion ? 'bg-freelo-soft-purple' : 'bg-white/20'
                    }`}
                  />
                ))}
              </div>
              <div className="text-sm text-gray-300">
                שאלה {currentQuestion + 1}/{questions.length}
              </div>
            </div>
            
            <h3 className="text-xl md:text-2xl font-bold text-center mb-6">
              {question.text}
            </h3>
            
            <div className="space-y-3 mb-2">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionToggle(option)}
                  className={`w-full flex items-center text-right p-4 rounded-xl transition-all ${
                    isOptionSelected(option)
                      ? 'bg-gradient-to-r from-freelo-gradient-start to-freelo-gradient-end text-white'
                      : 'bg-white/5 hover:bg-white/10 text-white'
                  }`}
                >
                  <div className={`w-5 h-5 mr-3 rounded-sm border flex items-center justify-center ${
                    isOptionSelected(option) 
                      ? 'bg-white border-white' 
                      : 'border-gray-400'
                  }`}>
                    {isOptionSelected(option) && (
                      <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-freelo-gradient-start">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  <span className="flex-grow">{option}</span>
                </button>
              ))}
            </div>
            
            <p className="text-sm text-gray-400 mb-4 text-center">
              ניתן לבחור מספר אפשרויות
            </p>
            
            <div className="flex justify-between mt-8">
              <button
                onClick={handlePrevious}
                className={`flex items-center px-4 py-2 rounded-full ${
                  currentQuestion === 0
                    ? 'text-gray-500 cursor-not-allowed'
                    : 'text-white hover:bg-white/10'
                }`}
                disabled={currentQuestion === 0}
              >
                <ArrowLeft className="w-4 h-4 ml-1" />
                הקודם
              </button>
              
              <button
                onClick={handleNext}
                className={`flex items-center px-4 py-2 rounded-full ${
                  hasSelectedOptions()
                    ? 'bg-gradient-to-r from-freelo-gradient-start to-freelo-gradient-end text-white'
                    : 'bg-white/20 text-white cursor-not-allowed'
                }`}
                disabled={!hasSelectedOptions()}
              >
                {isLastQuestion ? 'סיום' : 'הבא'}
                <ArrowRight className="w-4 h-4 mr-1" />
              </button>
            </div>
          </div>
          
          {showConfetti && (
            <div className="absolute inset-0 flex items-center justify-center z-10 bg-black/50 backdrop-blur-sm">
              <div className="text-center p-6 rounded-xl">
                <div className="text-4xl mb-2">🎉</div>
                <h3 className="text-2xl font-bold mb-2">תודה רבה!</h3>
                <p className="text-gray-300">
                  התשובות שלך יעזרו לנו להתאים אירועים מושלמים בשבילך.
                </p>
                <button 
                  onClick={() => setShowConfetti(false)}
                  className="mt-4 freelo-button"
                >
                  סגור
                </button>
              </div>
            </div>
          )}
        </div>
      </MotionDiv>
      
      <ConfettiEffect active={showConfetti} />
    </MotionDiv>
  );
};

export default Questionnaire;
