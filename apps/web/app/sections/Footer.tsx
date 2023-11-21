import P from '../components/P';

export default function Footer(): JSX.Element {
  return (
    <footer>
      <P className="[&&]:text-xs [&&]:text-zinc-500 border-t border-t-zinc-600 py-2 ">
        © 2023 Miletić Dušan
      </P>
    </footer>
  );
}
