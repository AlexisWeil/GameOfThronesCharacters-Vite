import { useContext } from 'react';
import { AddCharacterForm } from '../../components/AddCharacterForm/AddCharacterForm.tsx';
import { CharactersContext } from '../../contexts/CharactersContext.ts';
import { useNavigate } from 'react-router-dom';

export const CharactersList = () => {
  const { charactersList, addCharacter } = useContext(CharactersContext);
  const navigate = useNavigate();

  return (
    <>
      <h1>Game of thrones Characters</h1>
      <AddCharacterForm onAddCharacter={addCharacter} /> <br />
      <br />
      <ul>
        {charactersList.map((character) => (
          <li
            onClick={() => navigate('/character/' + character.id)}
            key={character.id}
          >
            {character.id}) <b>{character.name}</b>
            <img
              alt={character.name}
              src={character.imageUrl}
              style={{ maxWidth: '100px' }}
            />
          </li>
        ))}
      </ul>
    </>
  );
};
