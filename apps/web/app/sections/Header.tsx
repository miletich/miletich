import Logo from 'common/Logo';
import Article from '../components/Article';
import P from '../components/P';
import H1 from '../components/H1';
import H2 from '../components/H2';

export default function Header(): JSX.Element {
  return (
    <header>
      <div className="flex mt-16 mb-9">
        <Logo className="fill-zinc-100 max-w-[6rem] mr-3" />
        <div>
          <H1 className="leading-5">Dušan Miletić</H1>
          <H2 className="[&&]:mb-0 [&&]:text-zinc-400 leading-5">
            Frontend Developer
          </H2>
        </div>
      </div>
      <Article>
        <P>
          I build complex data visualizations in D3, and secure, reliable, and
          performant React apps in TypeScript since 2017.
        </P>
      </Article>
    </header>
  );
}
