import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {Colors, FontFamily} from '../common/style';
import {ICharacter} from '../store/app/appReducer';
import {GenderType, RootStackParamList, Screen} from '../common/enums';
import {useAppDispatch} from '../store/store';
import {setFemale, setMale, setOther} from '../store/app/actions';
import {isStringInArrays} from '../utils/utils';

interface ICharacterListItemProps {
  item: ICharacter;
  femaleQuantity: string[];
  maleQuantity: string[];
  otherQuantity: string[];
}

const CharacterListItem: FC<ICharacterListItemProps> = ({
  item,
  femaleQuantity,
  maleQuantity,
  otherQuantity,
}) => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handleItemPress = () => {
    navigation.navigate(Screen.Character, {item: item});
  };

  const isInFavorites = isStringInArrays(
    item.name,
    femaleQuantity,
    maleQuantity,
    otherQuantity,
  );

  const handleInFavorite = () => {
    if (item.gender === GenderType.FEMALE) {
      dispatch(setFemale([...femaleQuantity, item.name]));
      return;
    }
    if (item.gender === GenderType.MALE) {
      dispatch(setMale([...maleQuantity, item.name]));
      return;
    }
    dispatch(setOther([...otherQuantity, item.name]));
  };

  const handleOutFavorite = () => {
    if (item.gender === GenderType.FEMALE) {
      dispatch(setFemale(femaleQuantity.filter(it => it !== item.name)));
      return;
    }
    if (item.gender === GenderType.MALE) {
      dispatch(setMale(maleQuantity.filter(it => it !== item.name)));
      return;
    }
    dispatch(setOther(otherQuantity.filter(it => it !== item.name)));
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleItemPress}>
      <Text style={styles.textName}>
        {item.name}-{item.gender}
      </Text>
      <TouchableOpacity
        onPress={isInFavorites ? handleOutFavorite : handleInFavorite}>
        <Image
          style={styles.image}
          source={
            isInFavorites
              ? require('../assets/images/HeartFill.png')
              : require('../assets/images/HeartEmpty.png')
          }
        />
      </TouchableOpacity>
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
