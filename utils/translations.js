import { useState, useEffect, createContext, useContext } from 'react';
import { useRouter } from 'next/router';
import { hy } from '../translations/hy';
import { ru } from '../translations/ru';
import { en } from '../translations/en';

const translations = { hy, ru, en };

const TranslationContext = createContext();

export const TranslationProvider = ({ children }) => {
  const router = useRouter();
  const [language, setLanguage] = useState('hy');

  useEffect(() => {
    const savedLang = localStorage.getItem('language');
    if (savedLang && translations[savedLang]) {
      setLanguage(savedLang);
    }
  }, []);

  const changeLanguage = (lang) => {
    if (translations[lang]) {
      setLanguage(lang);
      localStorage.setItem('language', lang);
      document.cookie = `NEXT_LOCALE=${lang}; path=/; max-age=31536000`;
    }
  };

  const t = (key) => {
    return translations[language][key] || key;
  };

  return (
    <TranslationContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => useContext(TranslationContext);
