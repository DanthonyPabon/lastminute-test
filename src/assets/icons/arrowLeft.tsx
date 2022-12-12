import React, {FC} from 'react';
import Svg, {Path} from 'react-native-svg';
import colors from '../colors';
import {SvgProps} from 'react-native-svg';

const ArrowLeft: FC<SvgProps> = ({fill = colors.black}) => (
  <Svg width={18} height={18} viewBox="0 0 24 24" fill={fill}>
    <Path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167L16.67 24 4.5 12.004z" />
  </Svg>
);

export default ArrowLeft;
