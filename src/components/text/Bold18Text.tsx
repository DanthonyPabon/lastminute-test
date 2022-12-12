import Styled from 'styled-components/native';

import colors from '../../assets/colors';
import {deviceSizeScale} from '../../utils/devices';

const Bold18Text = Styled.Text`
  font-size: ${18 * deviceSizeScale}px;
  line-height: ${18 * deviceSizeScale}px;
  color: ${colors.black};
  font-weight: bold;
`;

export default Bold18Text;
