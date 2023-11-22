import { Text, View } from '@react-pdf/renderer';
import { experience } from 'data/experience';
import { formatDate } from 'common/utils/format-date';
import H3 from './components/H3';
import H2 from './components/H2';
import Section from './Section';

export default function Experience(): JSX.Element {
  return (
    <>
      <H2>Experience</H2>
      {experience
        .concat()
        .reverse()
        .map(({ id, position, at, from, to, description, tech }) => (
          <Section key={id}>
            <Text>{`${formatDate(from)} ${formatDate(to)}`}</Text>
            <H3>{`${position} · ${at}`}</H3>
            <View>
              {description.map((el) => (
                <Text key={el}>{el}</Text>
              ))}
            </View>
            <Text>{tech.join(' · ')}</Text>
          </Section>
        ))}
    </>
  );
}
