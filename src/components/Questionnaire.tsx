
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
      text: "What type of events interest you the most?",
      options: [
        "Large parties (festivals, club nights)",
        "Intimate gatherings (groups under 20 participants)",
        "Workshops for education and exploration",
        "BDSM-focused events (play parties, workshops, etc.)",
        "Community meetups (picnics, socials)",
        "Online events (webinars, virtual meetups)",
        "Other"
      ]
    },
    {
      id: 2,
      text: "What's most important to you when looking for an event?",
      options: [
        "High privacy and discretion",
        "Clear consent and safety protocols",
        "Creating new connections and community",
        "Convenient location",
        "Event theme and quality of experience",
        "Fair pricing",
        "Other"
      ]
    },
    {
      id: 3,
      text: "How often do you attend events like these?",
      options: [
        "Weekly",
        "Monthly",
        "A few times a year",
        "Only large/special events (festivals)",
        "Never yet, but excited to start",
        "Other"
      ]
    },
    {
      id: 4,
      text: "What information is most important to know before an event?",
      options: [
        "Attendee demographics",
        "Event structure and activities",
        "Who's organizing and their reputation",
        "What's included in the ticket price",
        "Dress code and behavior expectations",
        "Whether the event is LGBTQ+ inclusive",
        "Other"
      ]
    },
    {
      id: 5,
      text: "What makes you feel most comfortable and safe at these events?",
      options: [
        "Vetted attendees and organizers",
        "Clear rules and consent protocols",
        "Ability to connect with others beforehand",
        "Professional security and supervision",
        "Positive reviews from past attendees",
        "No photos/videos policy",
        "Other"
      ]
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
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

  const handleOptionSelect = (option: string) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questions[currentQuestion].id]: option
    });
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
        Find Your Perfect <span className="shimmer-text">Events</span>
      </MotionH2>
      
      <MotionP
        variants={fadeIn('up', 0.3)}
        className="text-gray-300 text-center mx-auto max-w-2xl mb-12"
      >
        Answer a few quick questions to help us customize your event recommendations
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
                Question {currentQuestion + 1}/{questions.length}
              </div>
            </div>
            
            <h3 className="text-xl md:text-2xl font-bold text-center mb-6">
              {question.text}
            </h3>
            
            <div className="space-y-3">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionSelect(option)}
                  className={`w-full text-left p-4 rounded-xl transition-all ${
                    selectedAnswers[question.id] === option
                      ? 'bg-gradient-to-r from-freelo-gradient-start to-freelo-gradient-end text-white'
                      : 'bg-white/5 hover:bg-white/10 text-white'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
            
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
                <ArrowLeft className="w-4 h-4 mr-1" />
                Previous
              </button>
              
              <button
                onClick={handleNext}
                className={`flex items-center px-4 py-2 rounded-full ${
                  selectedAnswers[question.id]
                    ? 'bg-gradient-to-r from-freelo-gradient-start to-freelo-gradient-end text-white'
                    : 'bg-white/20 text-white cursor-not-allowed'
                }`}
                disabled={!selectedAnswers[question.id]}
              >
                {isLastQuestion ? 'Finish' : 'Next'}
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>
          
          {showConfetti && (
            <div className="absolute inset-0 flex items-center justify-center z-10 bg-black/50 backdrop-blur-sm">
              <div className="text-center p-6 rounded-xl">
                <div className="text-4xl mb-2">🎉</div>
                <h3 className="text-2xl font-bold mb-2">Thank you!</h3>
                <p className="text-gray-300">
                  Your responses will help us tailor the perfect events for you.
                </p>
                <button 
                  onClick={() => setShowConfetti(false)}
                  className="mt-4 freelo-button"
                >
                  Close
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
