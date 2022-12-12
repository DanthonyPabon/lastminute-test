import Styled from 'styled-components/native';

import colors from '../../assets/colors';
import {deviceSizeScale} from '../../utils/devices';

const TitleText = Styled.Text`
  font-size: ${24 * deviceSizeScale}px;
  line-height: ${29 * deviceSizeScale}px;
  color: ${colors.black}
`;

export default TitleText;
