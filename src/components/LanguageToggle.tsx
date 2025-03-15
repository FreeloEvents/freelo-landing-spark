
import React from 'react';
import { useTranslation } from '@/utils/translations';
import { Button } from '@/components/ui/button';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useTranslation();

  return (
    <div className="fixed top-4 right-4 z-50">
      <Button 
        onClick={() => setLanguage(language === 'he' ? 'en' : 'he')}
        variant="outline"
        size="sm"
        className="bg-white/10 hover:bg-white/20 text-white border-white/20"
      >
        {language === 'he' ? 'English' : 'עברית'}
      </Button>
    </div>
  );
};

export default LanguageToggle;
