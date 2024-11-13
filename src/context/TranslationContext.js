import React, { createContext, useContext, useState, useEffect } from 'react';

const TranslationContext = createContext();

export const TranslationProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const [translations, setTranslations] = useState({});
  const [originalTexts, setOriginalTexts] = useState({});

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_TRANSLATE_API_KEY;

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    const savedTranslations = JSON.parse(localStorage.getItem('translations')) || {};
    if (savedLanguage) {
      setLanguage(savedLanguage);
      setTranslations(savedTranslations[savedLanguage] || {}); // Load only the saved language's translations
      handleLanguageChange(savedLanguage);
    }
  }, []);

  const translateContent = async (text, targetLanguage, sourceLanguage = 'en') => {
    try {
      const response = await fetch(
        `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            q: text,
            target: targetLanguage,
            source: sourceLanguage,
          }),
        }
      );
      const data = await response.json();
      return data.data.translations[0].translatedText;
    } catch (error) {
      console.error('Translation error:', error);
      return text;
    }
  };

  const handleLanguageChange = async (newLanguage) => {
    if (newLanguage === language) return;

    localStorage.setItem('language', newLanguage);

    const elements = document.body.querySelectorAll('*:not(script):not(style)');
    const textsToTranslate = Array.from(elements)
      .map((el) => el.innerText)
      .filter((text) => text && text.trim()); // Ensure text is a valid string before calling trim()

    if (language === 'en') {
      const newOriginalTexts = {};
      textsToTranslate.forEach((text) => {
        newOriginalTexts[text] = text;
      });
      setOriginalTexts(newOriginalTexts);
    }

    const cachedTranslations = JSON.parse(localStorage.getItem('translations')) || {};
    if (!cachedTranslations[newLanguage]) {
      cachedTranslations[newLanguage] = {}; // Initialize for new language if it doesn't exist
    }

    const sourceLanguage = language === 'en' ? 'en' : language;
    const textsToUse = language === 'en' ? textsToTranslate : Object.values(originalTexts);

    const translatedTexts = await Promise.all(
      textsToUse.map(async (text) => {
        const cachedTranslation = cachedTranslations[newLanguage][text];
        if (cachedTranslation) {
          return cachedTranslation;
        } else {
          const translation = await translateContent(text, newLanguage, sourceLanguage);
          cachedTranslations[newLanguage][text] = translation; // Save each translation to cache
          return translation;
        }
      })
    );

    localStorage.setItem('translations', JSON.stringify(cachedTranslations));

    const newTranslations = {};
    textsToUse.forEach((text, index) => {
      newTranslations[text] = translatedTexts[index];
    });

    setTranslations(newTranslations);
    setLanguage(newLanguage);
  };

  const getTranslatedText = (text) => {
    if (language === 'en') {
      return text;
    }
    if (translations[text]) {
      return translations[text];
    }
    const originalText = Object.entries(originalTexts).find(([key, value]) => value === text)?.[0];
    if (originalText && translations[originalText]) {
      return translations[originalText];
    }
    return text;
  };

  return (
    <TranslationContext.Provider
      value={{ language, setLanguage: handleLanguageChange, getTranslatedText }}
    >
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => useContext(TranslationContext);
