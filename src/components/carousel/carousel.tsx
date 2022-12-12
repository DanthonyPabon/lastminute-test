import React, {FunctionComponent} from 'react';
import {ListRenderItem, FlatList, StyleSheet, Dimensions} from 'react-native';

import FastImage from 'react-native-fast-image';
import {deviceSize} from '../../utils/devices';

const {width: windowWidth} = Dimensions.get('window');

const sizeImage = deviceSize.width;

const styles = StyleSheet.create({
  image: {
    width: windowWidth - 33.5,
    height: 250,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  imageTwo: {
    width: windowWidth,
    height: sizeImage,
  },
});

interface IProps {
  gallery: string[];
  isDetail?: boolean;
}

const Carousel: FunctionComponent<IProps> = ({gallery, isDetail = false}) => {
  const renderItem: ListRenderItem<string> = ({item}) => {
    return (
      <FastImage
        style={isDetail ? styles.imageTwo : styles.image}
        source={{uri: item}}
        resizeMode="cover"
      />
    );
  };

  return (
    <FlatList
      data={gallery}
      renderItem={renderItem}
      showsHorizontalScrollIndicator={false}
      pagingEnabled
      horizontal
    />
  );
};

export default Carousel;
