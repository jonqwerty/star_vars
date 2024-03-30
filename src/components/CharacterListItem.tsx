import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';

import {Colors, FontFamily} from '../common/style';
import {ICharacter} from '../store/app/appReducer';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList, Screen} from '../common/enums';

interface ICharacterListItemProps {
  item: ICharacter;
}

const CharacterListItem: FC<ICharacterListItemProps> = ({item}) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handleItemPress = () => {
    navigation.navigate(Screen.Character, {item: item});
  };
  return (
    <TouchableOpacity style={styles.container} onPress={handleItemPress}>
      <Text style={styles.textName}>{item.name}</Text>
      <Image
        style={styles.image}
        source={require('../assets/images/HeartEmpty.png')}
      />
    </TouchableOpacity>
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
