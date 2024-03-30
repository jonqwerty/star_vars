import {StyleSheet, Text, View} from 'react-native';
import React, {FC, useEffect} from 'react';
import {useRoute} from '@react-navigation/native';
import {useSelector} from 'react-redux';

import {Colors, FontFamily} from '../common/style';
import {RootRouteProps} from '../common/enums';
import {RootState, useAppDispatch} from '../store/store';
import {getPlanetInfo} from '../store/app/actions';

const CharacterScreen: FC = () => {
  const dispatch = useAppDispatch();
  const route = useRoute<RootRouteProps<'Character'>>();
  const {planet} = useSelector((state: RootState) => state.app);

  const planetId =
    route.params.item.homeworld.split('/')[
      route.params.item.homeworld.split('/').length - 2
    ];

  useEffect(() => {
    dispatch(getPlanetInfo(Number(planetId)));
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.textTitle}>Character info</Text>
        <Text style={[styles.textTitle, {fontFamily: FontFamily.poppins_bold}]}>
          {route.params.item.name}
        </Text>
      </View>
      <View style={styles.paper}>
        <View style={styles.rowPaper}>
          <Text style={styles.text}>Name:</Text>
          <Text style={styles.textName}>{route.params.item.name}</Text>
        </View>
        <View style={styles.rowPaper}>
          <Text style={styles.text}>Birth Year:</Text>
          <Text style={styles.textName}>{route.params.item.birth_year}</Text>
        </View>
        <View style={styles.rowPaper}>
          <Text style={styles.text}>Gender:</Text>
          <Text style={styles.textName}>{route.params.item.gender}</Text>
        </View>
        <View style={styles.rowPaper}>
          <Text style={styles.text}>Height:</Text>
          <Text style={styles.textName}>{route.params.item.height}</Text>
        </View>
        <View style={styles.rowPaper}>
          <Text style={styles.text}>Eye Color:</Text>
          <Text style={styles.textName}>{route.params.item.eye_color}</Text>
        </View>
        <View style={styles.rowPaper}>
          <Text style={styles.text}>Mass:</Text>
          <Text style={styles.textName}>{route.params.item.mass}</Text>
        </View>
        <View style={styles.rowPaper}>
          <Text style={styles.text}>Home World:</Text>
          <Text style={styles.textName}>{planet?.name}</Text>
        </View>
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
  rowPaper: {flexDirection: 'row', paddingVertical: 5},
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
  textName: {
    fontFamily: FontFamily.poppins_semibold,
    color: Colors.black,
    fontSize: 16,
    lineHeight: 18,
  },
  text: {
    width: '35%',
    fontFamily: FontFamily.poppins_regular,
    color: Colors.black,
    fontSize: 16,
    lineHeight: 18,
  },
});
