import Styled from 'styled-components/native';

import colors from '../../assets/colors';
import {deviceSizeScale} from '../../utils/devices';

const HeaderText = Styled.Text`
  font-size: ${44 * deviceSizeScale}px;
  line-height: ${49 * deviceSizeScale}px;
  color: ${colors.black};
  font-weight: bold;
`;

export default HeaderText;
