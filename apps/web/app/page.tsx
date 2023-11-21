import Logo from 'common/Logo';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Article from './components/Article';

export default function Page(): JSX.Element {
  return (
    <>
      <header>
        <Logo />
        <h1>Dušan Miletić</h1>
        <h2>Frontend Developer</h2>
        <Article>
          <p>...intro</p>
        </Article>
      </header>
      <main>
        <Experience />
        <Skills />
      </main>
    </>
  );
}
