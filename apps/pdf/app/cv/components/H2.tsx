import type { PropsWithChildren } from 'react';
import { Text } from '@react-pdf/renderer';
import { styles } from '../styles';

export default function H2({ children }: PropsWithChildren): JSX.Element {
  return <Text style={styles.h2}>{children}</Text>;
}
