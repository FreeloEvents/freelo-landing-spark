
import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { MotionDiv, MotionH2, MotionP, fadeIn } from './motion';

const EventCarousel: React.FC = () => {
  const events = [
    "Swinger Parties",
    "BDSM Play Parties",
    "Orgies",
    "Polyamory Meetups",
    "Sex-Positive Festivals",
    "Tantra Workshops",
    "Kink Education Events",
    "Private Home Gatherings"
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
        className="text-3xl md:text-4xl font-bold text-center mb-2"
      >
        Discover <span className="shimmer-text">Events</span> For You
      </MotionH2>
      
      <MotionP
        variants={fadeIn('up', 0.3)}
        className="text-gray-300 text-center mx-auto max-w-2xl mb-12"
      >
        We curate a wide variety of the most exciting events in the community
      </MotionP>
      
      <MotionDiv
        variants={fadeIn('up', 0.4)}
        className="relative max-w-3xl mx-auto h-64 px-4"
      >
        <div className="absolute inset-0 bg-freelo-card-bg rounded-2xl border border-white/10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-freelo-gradient-start to-freelo-gradient-end opacity-10" />
          
          <div className="h-full flex items-center justify-center p-6">
            <div className="text-center">
              <h3 className="text-3xl font-bold shimmer-text mb-4">{events[currentIndex]}</h3>
              <p className="text-gray-300 max-w-lg mx-auto">
                Connect with like-minded individuals in a safe, inclusive environment.
              </p>
            </div>
          </div>
          
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all"
            aria-label="Previous event"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all"
            aria-label="Next event"
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
                aria-label={`Go to event ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </MotionDiv>
    </MotionDiv>
  );
};

export default EventCarousel;
