import { createContext } from 'react';
import { Character } from '../models/Character.ts';

interface CharactersContext {
  charactersList: Character[];
  addCharacter: (character: Character) => void;
}

export const CharactersContext = createContext<CharactersContext>({
  charactersList: [],
  addCharacter: () => {},
});
