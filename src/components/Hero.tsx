
import React, { useState } from 'react';
import { toast } from 'sonner';
import { Input } from '@/components/ui/input';
import Logo from './Logo';
import { MotionDiv, MotionH1, MotionP, MotionSpan, fadeIn, staggerContainer } from './motion';

const Hero: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API request
    setTimeout(() => {
      toast.success('תודה שנרשמת!', {
        description: 'נעדכן אותך בחדשות של Freelo.',
      });
      setEmail('');
      setIsLoading(false);
    }, 1000);
  };

  return (
    <MotionDiv
      variants={staggerContainer(0.1, 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="min-h-screen flex flex-col items-center justify-center px-4 py-16 sm:py-20 relative overflow-hidden"
    >
      <MotionDiv
        variants={fadeIn('up', 0.3)}
        className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-freelo-gradient-start to-freelo-gradient-end opacity-20 blur-[80px] top-0 -z-10"
      />
      
      <Logo className="mb-8" />
      
      <MotionH1 
        variants={fadeIn('up', 0.4)}
        className="text-4xl md:text-6xl font-bold text-center mb-6 max-w-3xl"
      >
        <MotionSpan className="shimmer-text font-extrabold">Freelo</MotionSpan>{" "}
        היא הפלטפורמה שמאחדת אירועים אינטימיים ואלטרנטיביים
      </MotionH1>
      
      <MotionP 
        variants={fadeIn('up', 0.5)}
        className="text-xl text-center text-gray-300 mb-10 max-w-2xl"
      >
        הפלטפורמה המקיפה לגילוי והצטרפות לאירועי פוליאמוריה, BDSM, סווינגרים, פסטיבלים ומסיבות פרטיות הכי אקסקלוסיביים.
      </MotionP>
      
      <MotionDiv 
        variants={fadeIn('up', 0.6)}
        className="w-full max-w-md"
      >
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full">
          <Input
            type="email"
            placeholder="הזינו את כתובת האימייל שלכם"
            className="h-12 rounded-full bg-white/10 border-white/20 text-white placeholder:text-gray-400 text-right"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button 
            type="submit" 
            className="freelo-button h-12 px-6 py-2 whitespace-nowrap"
            disabled={isLoading}
          >
            {isLoading ? 'נרשם...' : 'קבלו גישה מוקדמת'}
          </button>
        </form>
        <p className="text-center text-xs text-gray-400 mt-2">
          אנו מכבדים את פרטיותכם ולעולם לא נשתף את המידע שלכם.
        </p>
      </MotionDiv>
    </MotionDiv>
  );
};

export default Hero;
