import { Route, Routes } from 'react-router-dom';
import { Home } from '../../pages/Home/Home.page.tsx';
import { CharactersList } from '../../pages/CharactersList/CharactersList.page.tsx';
import { CharactersContext } from '../../contexts/CharactersContext.ts';
import { useCharacters } from '../../hooks/useCharacters.ts';
import { CharacterDetailsPage } from '../../pages/CharacterDetails/CharacterDetails.page.tsx';
import { Content, Footer, TemplateWrapper } from './Template.style.tsx';
import { Header } from '../Header/Header.tsx';

export const Template = () => {
  const { charactersList, addCharacter } = useCharacters();

  return (
    <CharactersContext.Provider value={{ charactersList, addCharacter }}>
      <TemplateWrapper>
        <Header />

        <Content>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/characters" element={<CharactersList />} />
            <Route path="/character/:id" element={<CharacterDetailsPage />} />
          </Routes>
        </Content>

        <Footer>By Zarkus13</Footer>
      </TemplateWrapper>
    </CharactersContext.Provider>
  );
};
