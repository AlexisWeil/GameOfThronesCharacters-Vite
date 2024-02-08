import { Character } from '../../models/Character.ts';
import { CharacterDetailsWrapper } from './CharacterDetails.style.tsx';
import { Avatar } from '../Avatar/Avatar.tsx';
import { Title } from '../Title/Title.tsx';

interface Props {
  character: Character;
}

export const CharacterDetails = ({ character }: Props) => {
  return (
    <CharacterDetailsWrapper>
      <Title>{character.name}</Title>
      <Avatar size="BIG" alt={character.name} src={character.imageUrl} />
      Family: {character.family}
      <br />
      Title: {character.title}
    </CharacterDetailsWrapper>
  );
};
