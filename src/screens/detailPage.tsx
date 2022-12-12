import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

import Container from '../components/container';
import {IHotel} from '../types/api';
import ArrowLeft from '../assets/icons/arrowLeft';
import dimensions from '../styles/dimensions';
import Bold18Text from '../components/text/Bold18Text';
import MedalIcon from '../assets/icons/medal';
import Carousel from '../components/carousel/carousel';
import Medium16Text from '../components/text/Medium16Text';
import Starts from '../components/info/starts';
import TitleText from '../components/text/TitleText';

const styles = StyleSheet.create({
  content: {paddingHorizontal: 0},
  containerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerAllInfo: {paddingHorizontal: 20},
  arrowIcon: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 50,
  },
  contentInfo: {
    flexDirection: 'row',
  },
  txtTitle: {textAlign: 'left', marginTop: 10},
  txtRating: {marginTop: 4, marginLeft: 5},
  spaceTop: {marginTop: dimensions.margin},
});

const DetailPage = ({route, navigation}: any) => {
  const hotelInfo: IHotel = route.params;

  const onSubmit = () => {
    navigation.goBack();
  };

  return (
    <Container style={styles.content} withScroll>
      <Carousel gallery={hotelInfo.gallery} isDetail />
      <View style={styles.arrowIcon}>
        <TouchableOpacity onPress={onSubmit}>
          <ArrowLeft />
        </TouchableOpacity>
      </View>
      <View style={styles.containerAllInfo}>
        <TitleText style={styles.txtTitle}>{hotelInfo.name}</TitleText>
        <View style={[styles.contentInfo, styles.spaceTop]}>
          {hotelInfo.stars && <Starts starts={hotelInfo.stars} />}
          <View style={styles.containerInfo}>
            <Bold18Text style={styles.txtRating}>
              {'  '}•{'  '}
              <MedalIcon /> {hotelInfo.userRating} Rating
            </Bold18Text>
          </View>
        </View>
        <View style={styles.spaceTop}>
          <Medium16Text>
            {hotelInfo.price} {hotelInfo.currency}/Night
          </Medium16Text>
        </View>
        <View style={styles.spaceTop}>
          <Medium16Text>
            {hotelInfo.location.address}, {hotelInfo.location.city}
          </Medium16Text>
        </View>
      </View>
    </Container>
  );
};

export default DetailPage;
