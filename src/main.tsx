import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Template } from './components/Template/Template.tsx';
import { GlobalStyle } from './globals/style.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Template />
    </BrowserRouter>
  </React.StrictMode>,
);
