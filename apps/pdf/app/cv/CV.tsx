import { Page, View, Document } from '@react-pdf/renderer';
import { styles } from './styles';
import Experience from './Experience';
import Skills from './Skills';
import Info from './Info';

// Create Document Component
export default function CV(): JSX.Element {
  return (
    <Document title="miletic-dusan-cv" author="Miletić Dušan">
      <Page size="A4" style={styles.page}>
        <View style={styles.left}>
          <Info />
          <Skills />
        </View>
        <View style={styles.right}>
          <Experience />
        </View>
      </Page>
    </Document>
  );
}
