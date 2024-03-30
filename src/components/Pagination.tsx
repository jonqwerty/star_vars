import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';

import {Colors, FontFamily} from '../common/style';
import {useAppDispatch} from '../store/store';
import {IResp} from '../store/app/appReducer';
import {setPage} from '../store/app/actions';
import Button from './Button';

interface IPaginationProps {
  characters: IResp | null;
  page: number;
}

const Pagination: FC<IPaginationProps> = ({characters, page}) => {
  const dispatch = useAppDispatch();
  const offset = 10;

  const firstItemInList = page * offset - (offset - 1);
  const lastItemInList =
    page * offset - (offset - 1) - 1 + (characters?.results.length || 0);

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
      <Text style={styles.text}>{firstItemInList}</Text>
      <Text style={styles.text}>-</Text>
      <Text style={styles.text}>{lastItemInList}</Text>
      <Text style={[styles.text, styles.marginLeftFive]}>of</Text>
      <Text style={[styles.text, styles.marginLeftFive]}>
        {characters?.count}
      </Text>

      <View style={styles.marginLeftTen}>
        <Button
          title={'PREV'}
          borderColor={characters?.previous ? Colors.black : Colors.grey}
          titleColor={characters?.previous ? Colors.black : Colors.grey}
          handler={handlePrevPress}
        />
      </View>

      <View style={styles.marginLeftTen}>
        <Button
          title={'NEXT'}
          borderColor={characters?.next ? Colors.black : Colors.grey}
          titleColor={characters?.next ? Colors.black : Colors.grey}
          handler={handleNextPress}
        />
      </View>
    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  container: {
    marginTop: 14,
    backgroundColor: Colors.white,
    padding: 10,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.grey_200,
  },

  text: {
    fontFamily: FontFamily.poppins_regular,
    color: Colors.black,
    fontSize: 16,
  },

  marginLeftFive: {
    marginLeft: 5,
  },

  marginLeftTen: {
    marginLeft: 10,
  },
});
