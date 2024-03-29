import {Image, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';

import {Colors, FontFamily} from '../common/style';
import {ICharacter} from '../store/app/appReducer';

interface ICharacterListItemProps {
  item: ICharacter;
}

const CharacterListItem: FC<ICharacterListItemProps> = ({item}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textName}>{item.name}</Text>
      <Image
        style={styles.image}
        source={require('../assets/images/HeartEmpty.png')}
      />
    </View>
  );
};

export default CharacterListItem;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    backgroundColor: Colors.white,
    padding: 10,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  textName: {
    fontFamily: FontFamily.poppins_black,
    color: Colors.black,
    fontSize: 16,
    lineHeight: 18,
  },
  image: {
    resizeMode: 'contain',
  },
});
