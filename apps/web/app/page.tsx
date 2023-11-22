import Experience from './sections/Experience';
import Footer from './sections/Footer';
import Header from './sections/Header';
import Skills from './sections/Skills';

export default function Page(): JSX.Element {
  return (
    <>
      <Header
        className="xl:sticky xl:top-0 xl:flex xl:flex-col xl:h-screen xl:pt-20 xl:text-right
        2xl:w-[327px]"
      />
      <div className="xl:mt-20">
        <main className="2xl:flex 2xl:gap-12">
          <Experience className="2xl:w-[768px]" />
          <Skills className="2xl:w-96" />
        </main>
        <Footer />
      </div>
    </>
  );
}
