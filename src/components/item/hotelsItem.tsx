import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

import {IHotelItem} from '../../types/components';
import Carousel from '../carousel/carousel';
import BasicInfo from '../info/basic-info';

const styles = StyleSheet.create({
  content: {},
  containerInfo: {
    width: '100%',
    padding: 10,
  },
});

const HotelItem = (props: IHotelItem) => {
  const {gallery, onClick} = props;
  return (
    <View>
      <Carousel gallery={gallery} />
      <TouchableOpacity
        onPress={() => onClick(props)}
        style={styles.containerInfo}>
        <BasicInfo {...props} />
      </TouchableOpacity>
    </View>
  );
};

export default HotelItem;
