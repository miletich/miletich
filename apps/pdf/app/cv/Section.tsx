import { View } from '@react-pdf/renderer';
import type { PropsWithChildren } from 'react';
import { styles } from './styles';

export default function Section({ children }: PropsWithChildren): JSX.Element {
  return <View style={styles.section}>{children}</View>;
}
