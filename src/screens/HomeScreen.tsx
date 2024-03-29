import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {FC, useEffect} from 'react';
import {useSelector} from 'react-redux';

import {RootState, useAppDispatch} from '../store/store';
import {getCharacters} from '../store/app/actions';
import CounterPane from '../components/CounterPane';
import {Colors} from '../common/style';
import CharacterListItem from '../components/CharacterListItem';
import Pagination from '../components/Pagination';

const Home: FC = () => {
  const dispatch = useAppDispatch();
  const {characters, page} = useSelector((state: RootState) => state.app);

  useEffect(() => {
    dispatch(getCharacters({page: page}));
  }, [page]);

  console.log('first', characters);
  return (
    <View style={styles.container}>
      <CounterPane />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={characters?.results}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => <CharacterListItem item={item} />}
        ListFooterComponent={<Pagination characters={characters} page={page} />}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.grey,
    paddingHorizontal: 16,
  },
});
