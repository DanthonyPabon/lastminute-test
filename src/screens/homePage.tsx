import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';

import Container from '../components/container';
import HotelApi from '../services/hotels';
import useRequestHandler from '../hook/useRequestHandler';
import {IHotel} from '../types/api';
import Separator from '../components/separator';
import useStatusBar from '../hook/useStatusBar';
import RouteNames from '../utils/navigation';
import HotelItem from '../components/item/hotelsItem';
import HeaderText from '../components/text/headers';
import {IHotelItem} from '../types/components';

const styles = StyleSheet.create({
  marginTop20: {
    marginTop: 20,
  },
});

const HomePage = ({navigation}: any) => {
  useStatusBar('light-content');
  const {onResponse} = useRequestHandler();
  const [hotelList, setHotelList] = useState<IHotel[]>([]);

  const goToHotelDetail = (item: IHotelItem) => {
    navigation.navigate(RouteNames.DetailPage, item);
  };

  const loadingData = useCallback(async () => {
    const {data, error} = await onResponse(HotelApi.getAllHotels());
    if (!error) {
      setHotelList(data);
    }
  }, []);

  useEffect(() => {
    loadingData().then();
  }, [loadingData]);

  return (
    <Container withScroll>
      <HeaderText>DISCOVER</HeaderText>
      <HeaderText>YOUR PLACE</HeaderText>
      <HeaderText>TO STAY</HeaderText>
      <View style={styles.marginTop20}>
        {hotelList.map(({...props}, index) => {
          return (
            <View key={props.id}>
              <HotelItem
                {...props}
                onClick={goToHotelDetail}
                isFirst={index !== hotelList.length - 1}
              />
              {index !== hotelList.length - 1 && <Separator />}
            </View>
          );
        })}
      </View>
    </Container>
  );
};

export default HomePage;
