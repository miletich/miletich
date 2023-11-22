import { Page, Text, View, Document } from '@react-pdf/renderer';
import { styles } from './styles';
import Experience from './Experience';

// Create Document Component
export default function CV(): JSX.Element {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.left}>
          <Text>Section #1</Text>
        </View>
        <View style={styles.right}>
          <Experience />
        </View>
      </Page>
    </Document>
  );
}
