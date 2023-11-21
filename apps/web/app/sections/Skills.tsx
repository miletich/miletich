import { skills } from 'data/skills';
import { languages } from 'data/languages';
import Article from '../components/Article';
import H2 from '../components/H2';
import Section from '../components/Section';
import H3 from '../components/H3';
import P from '../components/P';

export default function Skills(): JSX.Element {
  return (
    <Article id="skills">
      <H2 className="border-b border-zinc-500 pb-2">Skills</H2>
      {Object.entries(skills).map(([key, value]) => (
        <Section key={key}>
          <H3>{key.replace(/\b\w/g, (s) => s.toUpperCase())}</H3>
          <P>{value.join(', ')}</P>
        </Section>
      ))}
      <Section>
        <H3>Spoken Languages</H3>
        <P>{`${languages
          .filter((language) => language.level === 'fluent')
          .map((language) => language.name)
          .join(', ')} (fluent)`}</P>
        <P>{`${languages
          .filter((language) => language.level === 'intermediate')
          .map((language) => language.name)
          .join(', ')} (intermediate)`}</P>
      </Section>
    </Article>
  );
}
