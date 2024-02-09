import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Template } from './components/Template/Template.tsx';
import { GlobalStyle } from './globals/style.tsx';
import { Provider } from 'react-redux';
import store from './store.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <GlobalStyle />
    <BrowserRouter>
      <Template />
    </BrowserRouter>
  </Provider>,
);
