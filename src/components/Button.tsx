import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';

import {FontFamily} from '../common/style';

interface IButton {
  title: string;
  titleColor: string;
  borderColor: string;
  handler: () => void;
}

const Button: FC<IButton> = ({title, titleColor, borderColor, handler}) => {
  return (
    <TouchableOpacity onPress={handler} style={[styles.btn, {borderColor}]}>
      <Text style={[styles.textBtn, {color: titleColor}]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  textBtn: {
    fontFamily: FontFamily.poppins_bold,
    fontSize: 16,
  },

  btn: {
    padding: 10,
    borderWidth: 2,
    borderRadius: 8,
  },
});
