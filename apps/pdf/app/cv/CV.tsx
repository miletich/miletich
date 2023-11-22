import { Page, Text, View, Document } from '@react-pdf/renderer';
import { styles } from './styles';
import Experience from './Experience';
import Skills from './Skills';

// Create Document Component
export default function CV(): JSX.Element {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.left}>
          <Skills />
        </View>
        <View style={styles.right}>
          <Experience />
        </View>
      </Page>
    </Document>
  );
}
