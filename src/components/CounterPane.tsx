import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';

import {Colors, FontFamily} from '../common/style';
import CounterCell from './CounterCell';
import Button from './Button';
import {useAppDispatch} from '../store/store';
import {resetAll} from '../store/app/actions';

interface ICounterPaneProps {
  femaleQuantity: string[];
  maleQuantity: string[];
  otherQuantity: string[];
}

const CounterPane: FC<ICounterPaneProps> = ({
  femaleQuantity,
  maleQuantity,
  otherQuantity,
}) => {
  const dispatch = useAppDispatch();

  const handleReset = () => {
    dispatch(resetAll());
  };

  return (
    <View>
      <View style={styles.row}>
        <Text style={styles.textTitle}>Characters</Text>

        <Button
          title={'Reset'}
          borderColor={Colors.red}
          titleColor={Colors.red}
          handler={handleReset}
        />
      </View>

      <View style={styles.rowCell}>
        <CounterCell count={femaleQuantity?.length} title={'Female'} />
        <CounterCell count={maleQuantity?.length} title={'Male'} />
        <CounterCell count={otherQuantity?.length} title={'Othes'} />
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
});
