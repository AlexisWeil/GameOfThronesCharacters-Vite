import { Route, Routes } from 'react-router-dom';
import { Home } from '../../pages/Home/Home.page.tsx';
import { CharactersList } from '../../pages/CharactersList/CharactersList.page.tsx';
import { CharactersContext } from '../../contexts/CharactersContext.ts';
import { useCharacters } from '../../hooks/useCharacters.ts';
import { CharacterDetailsPage } from '../../pages/CharacterDetails/CharacterDetails.page.tsx';

export const Template = () => {
  const { charactersList, addCharacter } = useCharacters();

  return (
    <CharactersContext.Provider value={{ charactersList, addCharacter }}>
      <div>Header</div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<CharactersList />} />
        <Route path="/character/:id" element={<CharacterDetailsPage />} />
      </Routes>

      <div>Footer</div>
    </CharactersContext.Provider>
  );
};
