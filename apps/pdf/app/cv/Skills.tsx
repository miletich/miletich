import { Text, View } from '@react-pdf/renderer';
import { skills } from 'data/skills';
import { languages } from 'data/languages';
import H3 from './components/H3';
import Section from './Section';

export default function Skills(): JSX.Element {
  return (
    <View>
      {Object.entries(skills).map(([key, value]) => (
        <Section key={key}>
          <H3>{key.replace(/\b\w/g, (s) => s.toUpperCase())}</H3>
          <Text>{value.join(', ')}</Text>
        </Section>
      ))}
      <Section>
        <H3>Spoken Languages</H3>
        <Text>{`${languages
          .filter((language) => language.level === 'fluent')
          .map((language) => language.name)
          .join(', ')} (fluent)`}</Text>
        <Text>{`${languages
          .filter((language) => language.level === 'intermediate')
          .map((language) => language.name)
          .join(', ')} (intermediate)`}</Text>
      </Section>
    </View>
  );
}
