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
    marginTop: 14,
    backgroundColor: Colors.white,
    padding: 10,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 4,

    shadowColor: Colors.black,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },

  textName: {
    fontFamily: FontFamily.poppins_semibold,
    color: Colors.black,
    fontSize: 16,
    lineHeight: 18,
  },
  image: {
    resizeMode: 'contain',
  },
});
