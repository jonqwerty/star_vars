import {createAsyncThunk} from '@reduxjs/toolkit';

import ActionType from './actionsType';
import {axiosApi} from '../../api/api';
import {IResp} from './appReducer';

const getCharacters = createAsyncThunk<IResp, {}, {}>(
  ActionType.GET_CHARACTERS,
  async (id, {extra: unknown}) => {
    const {data} = await axiosApi.get('people/');
    return data;
  },
);

export {getCharacters};
