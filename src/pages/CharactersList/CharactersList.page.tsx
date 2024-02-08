import { useContext } from 'react';
import { AddCharacterForm } from '../../components/AddCharacterForm/AddCharacterForm.tsx';
import { CharactersContext } from '../../contexts/CharactersContext.ts';
import { useNavigate } from 'react-router-dom';
import { Title } from '../../components/Title/Title.tsx';
import { CharacterListItem, List } from './CharactersList.style.tsx';
import { Avatar } from '../../components/Avatar/Avatar.tsx';

export const CharactersList = () => {
  const { charactersList, addCharacter } = useContext(CharactersContext);
  const navigate = useNavigate();

  return (
    <>
      <Title>Game of thrones Characters</Title>
      <AddCharacterForm onAddCharacter={addCharacter} /> <br />
      <br />
      <List>
        {charactersList.map((character) => (
          <CharacterListItem
            onClick={() => navigate('/character/' + character.id)}
            key={character.id}
          >
            <Avatar
              size="SMALL"
              alt={character.name}
              src={character.imageUrl}
            />
            {character.id}) <b>{character.name}</b>
          </CharacterListItem>
        ))}
      </List>
    </>
  );
};
