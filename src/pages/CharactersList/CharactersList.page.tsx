import { AddCharacterForm } from '../../components/AddCharacterForm/AddCharacterForm.tsx';
import { useNavigate } from 'react-router-dom';
import { Title } from '../../components/Title/Title.tsx';
import { CharacterListItem, List } from './CharactersList.style.tsx';
import { Avatar } from '../../components/Avatar/Avatar.tsx';
import { useCharacters } from '../../hooks/useCharacters.ts';
import { MdDelete as DeleteIcon } from 'react-icons/md';

export const CharactersList = () => {
  const { charactersList, fetchingCharacters, addCharacter, deleteCharacter } =
    useCharacters();
  const navigate = useNavigate();

  return (
    <>
      <Title>Game of thrones Characters</Title>
      <AddCharacterForm onAddCharacter={addCharacter} /> <br />
      <br />
      <List>
        {fetchingCharacters && <div>Loading ...</div>}

        {charactersList.map((character) => (
          <CharacterListItem
            onClick={() => navigate('/character/' + character.id)}
            key={character.id}
          >
            <DeleteIcon
              onClick={(e) => {
                e.stopPropagation();
                deleteCharacter(character.id);
              }}
            />
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
