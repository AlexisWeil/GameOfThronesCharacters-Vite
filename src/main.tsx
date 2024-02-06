import React from 'react';
import ReactDOM from 'react-dom/client';
import { CharactersList } from './pages/CharactersList/CharactersList.page.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CharactersList />
  </React.StrictMode>,
);
