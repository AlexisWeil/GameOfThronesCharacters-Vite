import { Link, useParams } from 'react-router-dom';
import { CharacterDetails } from '../../components/CharacterDetails/CharacterDetails.tsx';
import {
  CharacterDetailsPageWrapper,
  NoCharacter,
} from './CharacterDetails.style.tsx';
import { useCharacters } from '../../hooks/useCharacters.ts';

export const CharacterDetailsPage = () => {
  // On pourrait créer un hook pour extraire cette logique de récupération
  const { id } = useParams();
  const { charactersList } = useCharacters();

  const characterId = parseInt(id || '-1');

  const character = charactersList.find((c) => c.id === characterId);

  return (
    <CharacterDetailsPageWrapper>
      {character ? (
        <CharacterDetails character={character} />
      ) : (
        <NoCharacter>Unknown character</NoCharacter>
      )}

      <Link to="/characters">Go back to list</Link>
    </CharacterDetailsPageWrapper>
  );
};
