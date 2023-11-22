import { Text } from '@react-pdf/renderer';
import type { PropsWithChildren } from 'react';
import { styles } from '../styles';

export default function P({ children }: PropsWithChildren): JSX.Element {
  return <Text style={styles.p}>{children}</Text>;
}
