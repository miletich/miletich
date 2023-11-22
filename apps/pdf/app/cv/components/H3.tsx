import type { PropsWithChildren } from 'react';
import { Text } from '@react-pdf/renderer';
import { styles } from '../styles';

export default function H3({ children }: PropsWithChildren): JSX.Element {
  return <Text style={styles.h3}>{children}</Text>;
}
