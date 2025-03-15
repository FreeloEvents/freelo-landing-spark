
import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { MotionDiv, MotionH2, MotionP, fadeIn, staggerContainer } from './motion';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const faqs: FAQItem[] = [
    {
      question: "איך אני יודע/ת שהפרטיות שלי מוגנת?",
      answer: "אנחנו מתייחסים לפרטיות ברצינות רבה. המידע האישי שלכם מוצפן ולעולם לא משותף עם מארגני אירועים ללא הסכמה מפורשת שלכם. אתם שולטים במידע שנראה לאחרים, ולפלטפורמה שלנו יש הנחיות קפדניות נגד צילום והקלטה באירועים."
    },
    {
      question: "איך אני יכול/ה להצטרף לאירועים פרטיים?",
      answer: "אירועים פרטיים דורשים אישור מהמארגנים. לאחר בניית הפרופיל שלכם, תוכלו לבקש גישה לאירועים פרטיים. למארגנים יכול להיות תהליך בדיקה משלהם, שיכול לכלול בקשה קצרה או ראיון כדי להבטיח התאמה טובה עם הקהילה שלהם."
    },
    {
      question: "איך אני מוצא/ת אירועים שמתאימים לתחומי העניין שלי?",
      answer: "הפלטפורמה שלנו משתמשת באלגוריתם התאמה מתקדם המבוסס על תחומי העניין, ההעדפות והקשרים הקהילתיים שלכם. לאחר מילוי השאלון המותאם אישית שלנו, תקבלו המלצות מותאמות. תוכלו גם להשתמש במסננים מפורטים כדי לחפש סוגים ספציפיים של אירועים."
    },
    {
      question: "האם פרילו מיועד רק לאנשים מנוסים?",
      answer: "ממש לא! פרילו מקבלת בברכה אנשים בכל רמות הניסיון. אירועים רבים מתוכננים במיוחד למתחילים, כולל סדנאות חינוכיות ומפגשים חברתיים ידידותיים למתחילים. תיאורי האירועים המקיפים שלנו מציינים בבירור את רמת הניסיון המומלצת לכל אירוע."
    },
    {
      question: "אילו אמצעי בטיחות קיימים?",
      answer: "הבטיחות היא העדיפות העליונה שלנו. כל האירועים והמארגנים עוברים אימות יסודי. האירועים חייבים להיות בעלי מדיניות הסכמה ברורה, פרוטוקולי בטיחות ואנשי בטיחות ייעודיים. אנו מספקים גם דירוגים וביקורות קהילתיות כדי לעזור לכם לקבל החלטות מושכלות לגבי אילו אירועים להשתתף."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
        שאלות <span className="shimmer-text">נפוצות</span>
      </MotionH2>
      
      <MotionP
        variants={fadeIn('up', 0.3)}
        className="text-gray-300 text-center mx-auto max-w-2xl mb-12"
      >
        מצאו תשובות לשאלות הנפוצות ביותר
      </MotionP>
      
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <MotionDiv
            key={index}
            variants={fadeIn('up', 0.3 + index * 0.1)}
            className="freelo-card overflow-hidden"
          >
            <button
              onClick={() => toggleQuestion(index)}
              className="flex justify-between items-center w-full text-right py-2 px-1"
            >
              <Plus 
                className={`w-5 h-5 transition-transform ${openIndex === index ? 'rotate-45' : 'rotate-0'}`}
              />
              <h3 className="text-lg font-semibold">{faq.question}</h3>
            </button>
            
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <p className="py-4 px-1 text-gray-300 text-right">
                {faq.answer}
              </p>
            </div>
          </MotionDiv>
        ))}
      </div>
      
      <MotionP
        variants={fadeIn('up', 0.6)}
        className="text-center text-gray-400 mt-8 max-w-2xl mx-auto"
      >
        יש לכם עוד שאלות? אנחנו כאן לעזור - פנו לצוות שלנו לקבלת סיוע אישי.
      </MotionP>
    </MotionDiv>
  );
};

export default FAQ;
