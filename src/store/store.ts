import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';

import appReducer from './app/appReducer';

const rootReducer = combineReducers({
  app: appReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {},
      },
      serializableCheck: false,
    }).concat(),
});

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const persistor = persistStore(store);
