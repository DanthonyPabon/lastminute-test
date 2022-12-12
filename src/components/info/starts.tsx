import React, {FunctionComponent} from 'react';
import {StyleSheet, View} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {IStart} from '../../types/components';
import Bold18Text from '../text/Bold18Text';

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

const Starts: FunctionComponent<IStart> = ({starts}) => (
  <View style={styles.containerStart}>
    <Svg
      clipRule="evenodd"
      fillRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={2}
      width={24}
      height={24}
      fill="black"
      viewBox="0 0 24 24">
      <Path
        d="M11.322 2.923a.754.754 0 011.356 0l2.65 5.44 6.022.829a.749.749 0 01.419 1.283c-1.61 1.538-4.382 4.191-4.382 4.191l1.069 5.952a.751.751 0 01-1.097.793L12 18.56l-5.359 2.851a.751.751 0 01-1.097-.793l1.07-5.952-4.382-4.191a.75.75 0 01.419-1.283l6.021-.829 2.65-5.44z"
        fillRule="nonzero"
      />
    </Svg>
    <Bold18Text style={styles.txtStarts}>{starts}</Bold18Text>
  </View>
);

export default Starts;
