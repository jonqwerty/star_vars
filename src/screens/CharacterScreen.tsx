import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {FC, useEffect} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {StackNavigationProp} from '@react-navigation/stack';

import {Colors, FontFamily} from '../common/style';
import {RootRouteProps, RootStackParamList} from '../common/enums';
import {RootState, useAppDispatch} from '../store/store';
import {getPlanetInfo} from '../store/app/actions';
import InfoItem from '../components/InfoItem';

const CharacterScreen: FC = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const route = useRoute<RootRouteProps<'Character'>>();
  const {planet} = useSelector((state: RootState) => state.app);

  const planetId =
    route.params.item.homeworld.split('/')[
      route.params.item.homeworld.split('/').length - 2
    ];

  useEffect(() => {
    dispatch(getPlanetInfo(Number(planetId)));
  }, []);

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleBack}>
        <Image
          style={styles.image}
          source={require('../assets/images/arrowBack.png')}
        />
      </TouchableOpacity>

      <View style={styles.row}>
        <Text style={styles.textTitle}>Character info</Text>
        <Text style={[styles.textTitle, {fontFamily: FontFamily.poppins_bold}]}>
          {route.params.item.name}
        </Text>
      </View>

      <View style={styles.paper}>
        <InfoItem title={'Name:'} info={route.params.item.name} />
        <InfoItem title={'Birth Year:'} info={route.params.item.birth_year} />
        <InfoItem title={'Gender:'} info={route.params.item.gender} />
        <InfoItem title={'Height:'} info={route.params.item.height} />
        <InfoItem title={'Eye Color:'} info={route.params.item.eye_color} />
        <InfoItem title={'Mass:'} info={route.params.item.mass} />
        <InfoItem title={'Home World:'} info={planet?.name || ''} />
      </View>
    </View>
  );
};

export default CharacterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.grey,
    paddingHorizontal: 16,
  },

  row: {flexDirection: 'row', justifyContent: 'space-between', marginTop: 25},

  paper: {
    marginTop: 14,
    backgroundColor: Colors.white,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Colors.grey_200,
  },

  textTitle: {
    fontFamily: FontFamily.poppins_semibold,
    color: Colors.black,
    fontSize: 16,
    lineHeight: 18,
  },

  image: {marginTop: 16},
});
