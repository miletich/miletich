import { Text } from '@react-pdf/renderer';
import type { PropsWithChildren } from 'react';
import { styles } from '../styles';

export default function Li({ children }: PropsWithChildren): JSX.Element {
  return <Text style={styles.li}>{children}</Text>;
}
