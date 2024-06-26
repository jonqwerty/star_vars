import {Alert, FlatList, StyleSheet, View} from 'react-native';
import React, {FC, useEffect} from 'react';
import {useSelector} from 'react-redux';

import {RootState, useAppDispatch} from '../store/store';
import {cleanError, getCharacters, setPage} from '../store/app/actions';
import CounterPane from '../components/CounterPane';
import {Colors} from '../common/style';
import CharacterListItem from '../components/CharacterListItem';
import Pagination from '../components/Pagination';

const Home: FC = () => {
  const dispatch = useAppDispatch();
  const {
    characters,
    page,
    femaleQuantity,
    maleQuantity,
    otherQuantity,
    validationError,
  } = useSelector((state: RootState) => state.app);

  useEffect(() => {
    dispatch(setPage(1));
  }, []);

  useEffect(() => {
    dispatch(getCharacters({page: page}));
  }, [page]);

  const handleCleanError = () => {
    dispatch(cleanError());
    dispatch(setPage(1));
  };

  return (
    <>
      {validationError
        ? Alert.alert(
            'Alert',
            `${validationError?.message || validationError}`,
            [{text: 'OK', onPress: () => handleCleanError()}],
          )
        : null}
      <View style={styles.container}>
        <CounterPane
          femaleQuantity={femaleQuantity}
          maleQuantity={maleQuantity}
          otherQuantity={otherQuantity}
        />

        <FlatList
          showsVerticalScrollIndicator={false}
          data={characters?.results}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <CharacterListItem
              item={item}
              femaleQuantity={femaleQuantity}
              maleQuantity={maleQuantity}
              otherQuantity={otherQuantity}
            />
          )}
          ListFooterComponent={
            <Pagination characters={characters} page={page} />
          }
          ListFooterComponentStyle={{marginBottom: 14}}
        />
      </View>
    </>
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
