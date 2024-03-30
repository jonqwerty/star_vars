import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';

import {Colors, FontFamily} from '../common/style';

interface IInfoItemProps {
  title: string;
  info: string;
}

const InfoItem: FC<IInfoItemProps> = ({title, info}) => {
  return (
    <View style={styles.rowPaper}>
      <Text style={styles.textTitle}>{title}</Text>
      <Text style={styles.textInfo}>{info}</Text>
    </View>
  );
};

export default InfoItem;

const styles = StyleSheet.create({
  rowPaper: {flexDirection: 'row', paddingVertical: 5},

  textTitle: {
    width: '35%',
    fontFamily: FontFamily.poppins_regular,
    color: Colors.black,
    fontSize: 16,
    lineHeight: 18,
  },

  textInfo: {
    fontFamily: FontFamily.poppins_semibold,
    color: Colors.black,
    fontSize: 16,
    lineHeight: 18,
  },
});
