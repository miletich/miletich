import Experience from './sections/Experience';
import Footer from './sections/Footer';
import Header from './sections/Header';
import Skills from './sections/Skills';

export default function Page(): JSX.Element {
  return (
    <>
      <Header />
      <main>
        <Experience />
        <Skills />
      </main>
      <Footer />
    </>
  );
}
