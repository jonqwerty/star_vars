import {createAction, createAsyncThunk} from '@reduxjs/toolkit';

import ActionType from './actionsType';
import {axiosApi} from '../../api/api';
import {IPlanet, IResp} from './appReducer';

const getCharacters = createAsyncThunk<IResp, {page: number}, {}>(
  ActionType.GET_CHARACTERS,
  async (params, {extra: unknown}) => {
    const {data} = await axiosApi.get('people/', {params});
    return data;
  },
);

const getPlanetInfo = createAsyncThunk<IPlanet, number, {}>(
  ActionType.GET_PLANET_INFO,
  async (id, {extra: unknown}) => {
    const {data} = await axiosApi.get(`planets/${id}`);
    return data;
  },
);

const setPage = createAction<number>(ActionType.SET_PAGE);

export {getCharacters, getPlanetInfo, setPage};
