import { experience } from 'data/experience';
import Article from '../components/Article';
import H2 from '../components/H2';
import Section from '../components/Section';
import H3 from '../components/H3';
import PositionDescription from '../components/PositionDescription';
import Li from '../components/Li';
import P from '../components/P';
import Period from '../components/Period';

type Props = { className?: string };

export default function Experience({ className }: Props): JSX.Element {
  return (
    <Article id="experience" className={className}>
      <H2 className="border-b border-zinc-500 pb-2">Experience</H2>
      {experience
        .concat()
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
            <P className="text-zinc-600 xl:!text-zinc-700">
              {tech.join(' · ')}
            </P>
          </Section>
        ))}
    </Article>
  );
}
