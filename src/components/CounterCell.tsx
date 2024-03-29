import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';

import {Colors, FontFamily} from '../common/style';

interface ICounterCellProps {
  count: string;
  title: string;
}

const CounterCell: FC<ICounterCellProps> = ({count, title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textCount}>{count}</Text>
      <Text style={styles.textTitle}>{title}</Text>
    </View>
  );
};

export default CounterCell;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    padding: 10,
    borderRadius: 5,
    flex: 1,
  },

  textCount: {
    fontFamily: FontFamily.poppins_semibold,
    color: Colors.black,
    fontSize: 30,
    lineHeight: 35,
  },
  
  textTitle: {
    fontFamily: FontFamily.poppins_medium,
    color: Colors.black,
    fontSize: 14,
    lineHeight: 16,
  },
});
