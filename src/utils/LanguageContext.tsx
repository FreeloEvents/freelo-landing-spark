
import React, { createContext, useState, ReactNode } from 'react';
import { TranslationKey, translations } from './translationData';

type LanguageContextType = {
  language: 'he' | 'en';
  setLanguage: (lang: 'he' | 'en') => void;
  t: (key: TranslationKey) => string;
};

export const LanguageContext = createContext<LanguageContextType>({
  language: 'he',
  setLanguage: () => {},
  t: () => '',
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<'he' | 'en'>('he');

  const t = (key: TranslationKey): string => {
    return translations[key][language];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
