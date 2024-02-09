import {
  APICharacter,
  Character,
  parseAPICharacter,
} from '../models/Character.ts';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface CharactersState {
  charactersList: Character[];
  fetchingCharacters: boolean;
}

const initialState: CharactersState = {
  charactersList: [],
  fetchingCharacters: false,
};

export const fetchCharacters = createAsyncThunk(
  'characters/fetchCharacters',
  () =>
    axios
      .get<APICharacter[]>('https://thronesapi.com/api/v2/Characters')
      .then((res) => res.data.map(parseAPICharacter)),
);

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    addCharacter: (state, action: PayloadAction<Character>) => ({
      ...state,
      charactersList: state.charactersList.concat(action.payload),
    }),
    deleteCharacter: (state, action: PayloadAction<number>) => ({
      ...state,
      charactersList: state.charactersList.filter(
        (c) => c.id !== action.payload,
      ),
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCharacters.pending, (state) => ({
      ...state,
      fetchingCharacters: true,
    }));

    builder.addCase(
      fetchCharacters.fulfilled,
      (state, action: PayloadAction<Character[]>) => ({
        ...state,
        fetchingCharacters: false,
        charactersList: action.payload,
      }),
    );
  },
});

export const { addCharacter, deleteCharacter } = charactersSlice.actions;
export default charactersSlice.reducer;
