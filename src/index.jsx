import React, { useEffect } from "react";
import { createRoot } from 'react-dom/client';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import cookies from "js-cookie";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    fallbackLng: "en",
    detection:{
      order: ['htmlTag', 'querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator',  'path', 'subdomain'],
      caches:['cookie']
    },
    backend : {
      loadPath: '/assets/locale/{{lng}}/translate.json',
    },
    interpolation: {
      escapeValue: false
    }
  });


function App() {
  const lang = cookies.get('i18next') || 'en' ;
  const { t } = useTranslation();

  useEffect(()=>{
    window.document.dir = i18n.dir();
  },[lang])


  return <>
    <h2>{t('Welcome')}</h2>
    <button onClick={()=>i18n.changeLanguage('ar')}>ar</button>
    <button onClick={()=>i18n.changeLanguage('en')}>en</button>
  </>;
}

const root = createRoot(document.getElementById('root'));
root.render(
  <App />
);