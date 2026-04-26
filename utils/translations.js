import { useState, useEffect, createContext, useContext } from 'react';
import { useRouter } from 'next/router';
import { hy } from '../translations/hy';
import { ru } from '../translations/ru';
import { en } from '../translations/en';

const translations = { hy, ru, en };

const TranslationContext = createContext();

export const TranslationProvider = ({ children }) => {
  const router = useRouter();
  const { locale } = router;
  const [language, setLanguage] = useState(locale || 'hy');

  useEffect(() => {
    if (locale && translations[locale]) {
      setLanguage(locale);
      localStorage.setItem('language', locale);
      document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000`;
    }
  }, [locale]);

  const changeLanguage = (lang) => {
    if (translations[lang]) {
      router.push(router.pathname, router.asPath, { locale: lang });
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
