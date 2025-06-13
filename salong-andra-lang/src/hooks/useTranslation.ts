import { useLanguage } from '../context/LanguageContext';
import { en } from '../translations/en';
import { sv } from '../translations/sv';

const translations = {
  en,
  sv
};

export const useTranslation = () => {
  const { language } = useLanguage();
  
  const t = (key: string) => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      if (value === undefined) {
        console.warn(`Translation key not found: ${key}`);
        return key;
      }
      value = value[k];
    }
    
    return value || key;
  };

  return { t, language };
}; 