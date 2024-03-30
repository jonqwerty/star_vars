import {RouteProp} from '@react-navigation/native';
import {ICharacter} from '../store/app/appReducer';

export enum GenderType {
  FEMALE = 'female',
  MALE = 'male',
}

export enum LoadingStatus {
  IDLE = 'idle',
  LOADING = 'loading',
  SUCCEEDED = 'succeeded',
  FAILED = 'failed',
}

export enum Screen {
  Home = 'Home',
  Character = 'Character',
}

export type RootStackParamList = {
  Home: {};
  Character: {item: ICharacter};
};

export type RootRouteProps<RouteName extends keyof RootStackParamList> =
  RouteProp<RootStackParamList, RouteName>;
