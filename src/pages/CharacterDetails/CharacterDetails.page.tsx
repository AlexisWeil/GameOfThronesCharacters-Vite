import { Link, useParams } from 'react-router-dom';
import { useContext } from 'react';
import { CharactersContext } from '../../contexts/CharactersContext.ts';
import { CharacterDetails } from '../../components/CharacterDetails/CharacterDetails.tsx';

export const CharacterDetailsPage = () => {
  // On pourrait créer un hook pour extraire cette logique de récupération
  const { id } = useParams();
  const { charactersList } = useContext(CharactersContext);

  const characterId = parseInt(id || '-1');

  const character = charactersList.find((c) => c.id === characterId);

  return (
    <>
      {character ? (
        <CharacterDetails character={character} />
      ) : (
        <div>Unknown character</div>
      )}

      <Link to="/characters">Go back to list</Link>
    </>
  );
};
