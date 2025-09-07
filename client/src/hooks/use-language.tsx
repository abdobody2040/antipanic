import React, { createContext, useContext, useEffect, useState } from 'react';
import { LocalStorage } from '@/lib/storage';
import { Language, getTranslation } from '@/lib/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof typeof import('@/lib/translations').translations.en) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    const savedLanguage = LocalStorage.get<Language>('app-language') || 'en';
    setLanguageState(savedLanguage);
    updateDocument(savedLanguage);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    LocalStorage.set('app-language', lang);
    updateDocument(lang);
  };

  const updateDocument = (lang: Language) => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  };

  const t = (key: keyof typeof import('@/lib/translations').translations.en) => {
    return getTranslation(key, language);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
