import Styled from 'styled-components/native';

import colors from '../../assets/colors';
import {deviceSizeScale} from '../../utils/devices';

const Medium16Text = Styled.Text`
  font-size: ${16 * deviceSizeScale}px;
  line-height: ${24 * deviceSizeScale}px;
  color: ${colors.black}
`;

export default Medium16Text;
