import React from "react";
import { createRoot } from 'react-dom/client';
import './config/i18n';
import App from './App';
import { LanguageProvider } from "./Context/LanguageContext";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'
import './index.css'
const root = createRoot(document.getElementById('root'));
let queryClient = new QueryClient()

root.render(
  <LanguageProvider>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
        <ReactQueryDevtools initialIsOpen={false} />
      </BrowserRouter>
    </QueryClientProvider>
  </LanguageProvider>
);
