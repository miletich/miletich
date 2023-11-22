import { Text, View } from '@react-pdf/renderer';
import { experience } from 'data/experience';
import { formatDate } from 'common/utils/format-date';

export default function Experience(): JSX.Element {
  return (
    <>
      <Text>Experience</Text>
      {experience
        .concat()
        .reverse()
        .map(({ id, position, at, from, to, description, tech }) => (
          <View key={id}>
            <Text>{`${formatDate(from)} ${formatDate(to)}`}</Text>
            <Text>{`${position} · ${at}`}</Text>
            <View>
              {description.map((el) => (
                <Text key={el}>{el}</Text>
              ))}
            </View>
            <Text>{tech.join(' · ')}</Text>
          </View>
        ))}
    </>
  );
}
