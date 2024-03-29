import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';

import {Colors, FontFamily} from '../common/style';
import CounterCell from './CounterCell';

const CounterPane: FC = () => {
  return (
    <View>
      <View style={styles.row}>
        <Text style={styles.textTitle}>Characters</Text>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.textBtn}>Reset</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.rowCell}>
        <CounterCell count={'0'} title={'Female'} />
        <CounterCell count={'0'} title={'Male'} />
        <CounterCell count={'0'} title={'Othes'} />
      </View>
    </View>
  );
};

export default CounterPane;

const styles = StyleSheet.create({
  textTitle: {
    fontFamily: FontFamily.poppins_semibold,
    color: Colors.black,
    fontSize: 16,
    lineHeight: 18,
  },

  textBtn: {
    fontFamily: FontFamily.poppins_bold,
    color: Colors.red,
    fontSize: 16,
    lineHeight: 18,
  },

  rowCell: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },

  row: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  btn: {
    padding: 10,
    borderWidth: 2,
    borderColor: Colors.red,
    borderRadius: 8,
  },
});
