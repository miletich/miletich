import { Text } from '@react-pdf/renderer';
import type { PropsWithChildren } from 'react';
import { styles } from '../styles';

export default function Small({ children }: PropsWithChildren): JSX.Element {
  return <Text style={styles.small}>{children}</Text>;
}
