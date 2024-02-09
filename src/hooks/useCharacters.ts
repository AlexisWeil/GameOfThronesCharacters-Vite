import { Character } from '../models/Character.ts';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store.ts';
import {
  addCharacter,
  deleteCharacter,
  fetchCharacters,
} from '../reducers/charactersReducer.ts';

export const useCharacters = () => {
  const dispatch = useAppDispatch();
  const { charactersList, fetchingCharacters } = useAppSelector(
    (state) => state.characters,
  );

  useEffect(() => {
    if (charactersList.length === 0) dispatch(fetchCharacters());
  }, []);

  const _addCharacter = (characterToAdd: Character) => {
    dispatch(
      addCharacter({
        ...characterToAdd,
        id: charactersList.length,
      }),
    );
  };

  const _deleteCharacter = (characterId: number) => {
    dispatch(deleteCharacter(characterId));
  };

  return {
    charactersList,
    fetchingCharacters,
    addCharacter: _addCharacter,
    deleteCharacter: _deleteCharacter,
  };
};
