import React, {FunctionComponent} from 'react';
import {StyleSheet, View} from 'react-native';
import TitleText from '../text/TitleText';
import {IInfoBasic} from '../../types/components';
import Medium16Text from '../text/Medium16Text';
import Starts from './starts';

const styles = StyleSheet.create({
  contentInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  containerStart: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  space10: {
    marginTop: 10,
  },
  txtStarts: {marginTop: 6, marginLeft: 5},
});

const InfoBasic: FunctionComponent<IInfoBasic> = ({
  stars,
  price,
  currency,
  name,
  location,
}) => (
  <View>
    <TitleText style={styles.space10}>{name}</TitleText>
    <Medium16Text style={styles.space10}>
      {location.address}, {location.city}
    </Medium16Text>
    <View style={styles.contentInfo}>
      {stars && <Starts starts={stars} />}
      <Medium16Text style={styles.space10}>
        {price} {currency}/night
      </Medium16Text>
    </View>
  </View>
);

export default InfoBasic;
