import { Svg, Path } from '@react-pdf/renderer';
import { viewBox, m1, m2, m3, d } from 'common/Logo/consts';
import { styles } from '../styles';

const fill = 'black';

export default function Logo(): JSX.Element {
  return (
    <Svg viewBox={viewBox} style={styles.logo}>
      <Path d={m1} fill={fill} />
      <Path d={m2} fill={fill} />
      <Path d={m3} fill={fill} />
      <Path d={d} fill={fill} />
    </Svg>
  );
}
