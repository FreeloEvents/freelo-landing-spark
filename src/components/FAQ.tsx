
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
      question: "How do I know my privacy is protected?",
      answer: "We take privacy extremely seriously. Your personal information is encrypted and never shared with event organizers without your explicit consent. You control what information is visible to others, and our platform has strict guidelines against photography and recording at events."
    },
    {
      question: "How can I join private events?",
      answer: "Private events require approval from the organizers. Once you build your profile, you can request access to private events. Organizers may have their own vetting process, which can include a brief application or interview to ensure a good fit with their community."
    },
    {
      question: "How do I find events that match my interests?",
      answer: "Our platform uses an advanced matching algorithm based on your interests, preferences, and community connections. After completing our personalized questionnaire, you'll receive tailored recommendations. You can also use detailed filters to search for specific types of events."
    },
    {
      question: "Is Freelo only for experienced people?",
      answer: "Not at all! Freelo welcomes people at all experience levels. Many events are specifically designed for newcomers, including educational workshops and beginner-friendly socials. Our comprehensive event descriptions clearly indicate the experience level recommended for each event."
    },
    {
      question: "What safety measures are in place?",
      answer: "Safety is our top priority. All events and organizers undergo thorough verification. Events must have clear consent policies, safety protocols, and designated safety personnel. We also provide community ratings and reviews to help you make informed decisions about which events to attend."
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
        Common <span className="shimmer-text">Questions</span>
      </MotionH2>
      
      <MotionP
        variants={fadeIn('up', 0.3)}
        className="text-gray-300 text-center mx-auto max-w-2xl mb-12"
      >
        Find answers to the most frequently asked questions
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
              className="flex justify-between items-center w-full text-left py-2 px-1"
            >
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              <Plus 
                className={`w-5 h-5 transition-transform ${openIndex === index ? 'rotate-45' : 'rotate-0'}`}
              />
            </button>
            
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <p className="py-4 px-1 text-gray-300">
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
        Have more questions? We're here to help - reach out to our team for personalized assistance.
      </MotionP>
    </MotionDiv>
  );
};

export default FAQ;
