import { Character } from '../../models/Character.ts';

interface Props {
  character: Character;
}

export const CharacterDetails = ({ character }: Props) => {
  return (
    <div>
      <img
        alt={character.name}
        src={character.imageUrl}
        style={{ maxWidth: '200px' }}
      />{' '}
      <br />
      {character.id})<b>{character.name}</b> <br />
      Family: {character.family} <br />
      Title: {character.title}
    </div>
  );
};
