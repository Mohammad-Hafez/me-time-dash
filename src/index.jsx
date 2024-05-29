import React from "react";
import { createRoot } from 'react-dom/client';
import './i18n';
import App from './App'; 
import { LanguageProvider } from "./Context/LanguageContext";

const root = createRoot(document.getElementById('root'));

root.render(
  <LanguageProvider>
    <App />
  </LanguageProvider>
);
