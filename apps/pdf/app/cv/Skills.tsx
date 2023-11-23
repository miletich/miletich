import { View } from '@react-pdf/renderer';
import { skills } from 'data/skills';
import { languages } from 'data/languages';
import Heading from './components/Heading';
import Section from './Section';
import P from './components/P';

export default function Skills(): JSX.Element {
  return (
    <View>
      {Object.entries(skills).map(([key, value]) => (
        <Section key={key}>
          <Heading>{key.replace(/\b\w/g, (s) => s.toUpperCase())}</Heading>
          <P>{value.join(', ')}</P>
        </Section>
      ))}
      <Section>
        <Heading>Spoken Languages</Heading>
        <P>{`${languages
          .filter((language) => language.level === 'fluent')
          .map((language) => language.name)
          .join(', ')} (fluent)`}</P>
        <P>{`${languages
          .filter((language) => language.level === 'intermediate')
          .map((language) => language.name)
          .join(', ')} (intermediate)`}</P>
      </Section>
    </View>
  );
}
