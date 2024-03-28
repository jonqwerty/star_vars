import {createReducer, isAnyOf, SerializedError} from '@reduxjs/toolkit';

import {getCharacters} from './actions';
import {LoadingStatus} from '../../common/enums';

export interface ICharacter {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string[];
  url: string[];
}

export interface IResp {
  count: number;
  next: string;
  previous: null;
  results: ICharacter[];
}
export interface IApp {
  characters: IResp | null;
  validationError: SerializedError | null;
  loading: string;
}

const initialState: IApp = {
  characters: null,
  validationError: null,
  loading: LoadingStatus.IDLE,
};

const appReducer = createReducer(initialState, builder => {
  builder
    .addCase(getCharacters.fulfilled, (state, action) => {
      state.characters = action.payload;
      state.validationError = null;
      state.loading = LoadingStatus.SUCCEEDED;
    })

    .addMatcher(isAnyOf(getCharacters.pending), state => {
      state.loading = LoadingStatus.LOADING;
    })

    .addMatcher(isAnyOf(getCharacters.rejected), (state, action) => {
      state.loading = LoadingStatus.FAILED;
      state.validationError = action.error;
    });
});

export default appReducer;
