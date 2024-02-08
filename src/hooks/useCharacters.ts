import {
  APICharacter,
  Character,
  parseAPICharacter,
} from '../models/Character.ts';
import { useEffect, useState } from 'react';
import axios from 'axios';

export const useCharacters = () => {
  const [charactersList, setCharactersList] = useState<Character[]>([]);

  useEffect(() => {
    axios
      .get<APICharacter[]>('https://thronesapi.com/api/v2/Characters')
      .then((res) =>
        setCharactersList(
          res.data.map((apiChar) => parseAPICharacter(apiChar)),
        ),
      );
  }, []);

  const addCharacter = (characterToAdd: Character) => {
    setCharactersList(
      charactersList.concat({
        ...characterToAdd,
        id: charactersList.length,
      }),
    );
  };

  return { charactersList, addCharacter };
};
