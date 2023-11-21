import Logo from 'assets/Logo';
import Experience from './sections/Experience';

export default function Page(): JSX.Element {
  return (
    <>
      <header>
        <Logo />
        <h1>Dušan Miletić</h1>
        <h2>Frontend Developer</h2>
        <p>...intro</p>
      </header>
      <main>
        <Experience />

        <article>
          <h2>Skills</h2>
          <section>
            <h3>Hero Health</h3>
          </section>
        </article>
      </main>
    </>
  );
}
