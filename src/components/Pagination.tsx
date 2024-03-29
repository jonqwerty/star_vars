import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';

import {Colors, FontFamily} from '../common/style';
import {useAppDispatch} from '../store/store';
import {IResp} from '../store/app/appReducer';
import {setPage} from '../store/app/actions';

interface IPaginationProps {
  characters: IResp | null;
  page: number;
}

const Pagination: FC<IPaginationProps> = ({characters, page}) => {
  const dispatch = useAppDispatch();

  const handlePrevPress = () => {
    if (characters?.previous) {
      const prevPage = Number(characters?.previous?.slice(-1));
      dispatch(setPage(prevPage));
    }
  };

  const handleNextPress = () => {
    if (characters?.next) {
      const nextPage = Number(characters?.next?.slice(-1));
      dispatch(setPage(nextPage));
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{page * 10 - 9}</Text>
      <Text style={styles.text}>-</Text>
      <Text style={styles.text}>
        {page * 10 - 9 - 1 + (characters?.results.length || 0)}
      </Text>
      <Text style={[styles.text, {marginLeft: 5}]}>of</Text>
      <Text style={[styles.text, {marginLeft: 5}]}>{characters?.count}</Text>
      <TouchableOpacity
        style={
          characters?.previous
            ? styles.btn
            : [styles.btn, {borderColor: Colors.grey}]
        }
        onPress={handlePrevPress}>
        <Text
          style={
            characters?.previous
              ? styles.text
              : [styles.text, {color: Colors.grey}]
          }>
          PREV
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={
          characters?.next
            ? styles.btn
            : [styles.btn, {borderColor: Colors.grey}]
        }
        onPress={handleNextPress}>
        <Text
          style={
            characters?.next ? styles.text : [styles.text, {color: Colors.grey}]
          }>
          NEXT
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    backgroundColor: Colors.white,
    padding: 10,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  text: {
    fontFamily: FontFamily.poppins_regular,
    color: Colors.black,
    fontSize: 16,
  },

  btn: {
    padding: 10,
    borderWidth: 2,
    borderColor: Colors.black,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
  },
});
