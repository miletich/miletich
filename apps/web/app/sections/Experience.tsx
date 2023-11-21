import { experience } from 'data/experience';
import Article from '../components/Article';
import H2 from '../components/H2';
import Section from '../components/Section';
import H3 from '../components/H3';
import PositionDescription from '../components/PositionDescription';
import Li from '../components/Li';
import P from '../components/P';
import Period from '../components/Period';

export default function Experience() {
  return (
    <Article id="experience">
      <H2>Experience</H2>
      {experience
        .reverse()
        .map(({ id, position, at, from, to, description, tech }) => (
          <Section key={id}>
            <Period from={from} to={to} />
            <H3>{`${position} · ${at}`}</H3>
            <PositionDescription>
              {description.map((el) => (
                <Li key={el}>{el}</Li>
              ))}
            </PositionDescription>
            <P>{tech.join(' · ')}</P>
          </Section>
        ))}
    </Article>
  );
}
