import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './locales/en.json';
import translationAR from './locales/ar.json';
import translationFR from './locales/fr.json';
import translationIT from './locales/it.json';

const resources = {
  en: { translation: translationEN },
  ar: { translation: translationAR },
  fr: { translation: translationFR },
  it: { translation: translationIT }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

(i18n as any).on('languageChanged', (lng: string) => {
  document.documentElement.lang = lng;
  document.documentElement.dir = (i18n as any).dir(lng);
});

// Set initial direction
document.documentElement.lang = (i18n as any).language || 'en';
document.documentElement.dir = (i18n as any).dir((i18n as any).language);

export default i18n;
