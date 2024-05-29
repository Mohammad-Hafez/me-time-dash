import React, { createContext, useContext } from 'react';
import i18n from 'i18next';
import cookies from "js-cookie";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    cookies.set('i18next', lang || 'en');
    window.document.dir = i18n.dir(lang);
  };

  return (
    <LanguageContext.Provider value={{ changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};
