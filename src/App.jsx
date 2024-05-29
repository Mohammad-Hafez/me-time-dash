import React from 'react';
import { useTranslation } from 'react-i18next';
import './App.css';
import { useLanguage } from './Context/LanguageContext';

function App() {
  const { t } = useTranslation();
  const { changeLanguage } = useLanguage(); 

  return (
    <div className="App">
      <h2>{t('Welcome')}</h2>
      <button onClick={() => changeLanguage('ar')}>ar</button>
      <button onClick={() => changeLanguage('en')}>en</button>
    </div>
  );
}

export default App;
