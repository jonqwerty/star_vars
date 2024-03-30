import {createReducer, isAnyOf, SerializedError} from '@reduxjs/toolkit';

import {getCharacters, getPlanetInfo, setPage} from './actions';
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

export interface IPlanet {
  climate: string;
  created: string;
  diameter: string;
  edited: string;
  films: string[];
  gravity: string;
  name: string;
  orbital_period: string;
  population: string;
  residents: string[];
  rotation_period: string;
  surface_water: string;
  terrain: string;
  url: string;
}

export interface IResp {
  count: number;
  next: string | null;
  previous: string | null;
  results: ICharacter[];
}
export interface IApp {
  characters: IResp | null;
  validationError: SerializedError | null;
  loading: string;
  page: number;
  planet: IPlanet | null;
}

const initialState: IApp = {
  characters: null,
  validationError: null,
  loading: LoadingStatus.IDLE,
  page: 1,
  planet: null,
};

const appReducer = createReducer(initialState, builder => {
  builder
    .addCase(getCharacters.fulfilled, (state, action) => {
      state.characters = action.payload;
      state.validationError = null;
      state.loading = LoadingStatus.SUCCEEDED;
    })

    .addCase(getPlanetInfo.fulfilled, (state, action) => {
      state.planet = action.payload;
      state.validationError = null;
      state.loading = LoadingStatus.SUCCEEDED;
    })

    .addCase(setPage, (state, action) => {
      state.page = action.payload;
    })

    .addMatcher(
      isAnyOf(getCharacters.pending, getPlanetInfo.pending),
      state => {
        state.loading = LoadingStatus.LOADING;
      },
    )

    .addMatcher(
      isAnyOf(getCharacters.rejected, getPlanetInfo.rejected),
      (state, action) => {
        state.loading = LoadingStatus.FAILED;
        state.validationError = action.error;
      },
    );
});

export default appReducer;
