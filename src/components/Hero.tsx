
import React, { useState } from 'react';
import { toast } from 'sonner';
import { Input } from '@/components/ui/input';
import Logo from './Logo';
import { MotionDiv, MotionH1, MotionP, MotionSpan, fadeIn, staggerContainer } from './motion';
import { supabase } from '@/integrations/supabase/client';

const Hero: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Check if email is valid
      if (!email || !email.includes('@')) {
        toast.error('אימייל לא תקין', {
          description: 'נא להזין כתובת אימייל תקינה',
        });
        setIsLoading(false);
        return;
      }

      // Insert email into Supabase
      const { error } = await supabase
        .from('Email Adresses')
        .insert([{ 'Email Adress': email }]);

      if (error) {
        console.error('Error inserting email:', error);
        
        // Check if it's a duplicate email error
        if (error.code === '23505') {
          toast.info('תודה!', {
            description: 'אימייל זה כבר רשום במערכת שלנו',
          });
        } else {
          toast.error('שגיאה בהרשמה', {
            description: 'אנא נסו שוב מאוחר יותר',
          });
        }
      } else {
        toast.success('תודה שנרשמת!', {
          description: 'נעדכן אותך בחדשות של Freelo.',
        });
        setEmail('');
      }
    } catch (err) {
      console.error('Unexpected error:', err);
      toast.error('שגיאה בהרשמה', {
        description: 'אנא נסו שוב מאוחר יותר',
      });
    } finally {
      setIsLoading(false);
    }
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
      
      <Logo className="mb-16" />
      
      <div className="flex flex-col items-center mb-10">
        <MotionH1 
          variants={fadeIn('up', 0.4)}
          className="text-center max-w-3xl mb-4"
        >
          <MotionSpan 
            className="bg-gradient-to-r from-freelo-bright-pink via-freelo-gradient-mid to-freelo-soft-purple bg-clip-text text-transparent font-extrabold text-5xl sm:text-6xl md:text-7xl block mb-5"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Freelo
          </MotionSpan>
          <span className="text-white text-2xl sm:text-3xl md:text-4xl font-bold block">
            הפלטפורמה שלך לאירועים ליברליים ואינטימיים
          </span>
        </MotionH1>
      </div>
      
      <MotionP 
        variants={fadeIn('up', 0.5)}
        className="text-lg sm:text-xl md:text-2xl text-center text-gray-300 mb-16 max-w-2xl leading-relaxed font-medium"
      >
        גלה אירועים דיסקרטיים וקהילתיים שמתאימים בדיוק לך
      </MotionP>
      
      <MotionDiv 
        variants={fadeIn('up', 0.6)}
        className="w-full max-w-md"
      >
        <form onSubmit={handleSubmit} className="flex gap-3 w-full flex-row">
          <button 
            type="submit" 
            className="freelo-button h-12 px-6 py-2 whitespace-nowrap text-sm sm:text-base"
            disabled={isLoading}
          >
            {isLoading ? 'נרשם...' : 'לקבלת עדכון בהשקה'}
          </button>
          <Input
            type="email"
            placeholder="הכניסו את האימייל שלכם"
            className="h-12 rounded-full bg-white/10 border-white/20 text-white placeholder:text-gray-400 text-right text-sm sm:text-base"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </form>
        <p className="text-center text-xs text-gray-400 mt-2">
          הנתונים שלכם נשמרים לצורכי גישה מוקדמת
        </p>
      </MotionDiv>
    </MotionDiv>
  );
};

export default Hero;
