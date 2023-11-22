import { Text, View } from '@react-pdf/renderer';
import { skills } from 'data/skills';
import { languages } from 'data/languages';

export default function Skills(): JSX.Element {
  return (
    <View>
      <Text>Skills</Text>

      {Object.entries(skills).map(([key, value]) => (
        <View key={key}>
          <Text>{key.replace(/\b\w/g, (s) => s.toUpperCase())}</Text>
          <Text>{value.join(', ')}</Text>
        </View>
      ))}
    </View>
  );
}
