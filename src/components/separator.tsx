import React from 'react';
import {StyleSheet, View} from 'react-native';
import colors from '../assets/colors';
import dimensions from '../styles/dimensions';

interface IProps {
  borderBottomColor?: string;
  marginVertical?: number;
}

const styles = StyleSheet.create({
  content: {
    borderBottomWidth: 1,
    width: '100%',
  },
});

const Separator = ({
  borderBottomColor = colors.grey10,
  marginVertical = dimensions.marginTopSpace,
}: IProps) => {
  return (
    <View
      style={{
        borderBottomColor,
        marginVertical: marginVertical,
        ...styles.content,
      }}
    />
  );
};

export default Separator;
