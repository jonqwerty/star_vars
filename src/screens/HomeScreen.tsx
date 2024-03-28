import {StyleSheet, Text, View} from 'react-native';
import React, {FC, useEffect} from 'react';
import {useSelector} from 'react-redux';

import {RootState, useAppDispatch} from '../store/store';
import {getCharacters} from '../store/app/actions';

const Home: FC = () => {
  const dispatch = useAppDispatch();
  const {characters} = useSelector((state: RootState) => state.app);

  useEffect(() => {
    dispatch(getCharacters({}));
  }, []);
  console.log('first', characters);
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
