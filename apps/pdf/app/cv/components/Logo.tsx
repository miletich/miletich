import { Svg, Path } from '@react-pdf/renderer';
import { viewBox, m1, m2, m3, d } from 'common/Logo/consts';
import { accentColor, infoStyles } from '../styles';

export default function Logo(): JSX.Element {
  return (
    <Svg viewBox={viewBox} style={infoStyles.logo} width={105} height={30}>
      <Path d={m1} fill={accentColor} />
      <Path d={m2} fill={accentColor} />
      <Path d={m3} fill={accentColor} />
      <Path d={d} fill={accentColor} />
    </Svg>
  );
}
