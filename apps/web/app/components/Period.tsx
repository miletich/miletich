import type { Position } from 'data/experience';
import { formatDate } from 'common/utils/format-date';
import P from './P';

type Props = Pick<Position, 'from' | 'to'>;

export default function Period({ from, to }: Props): JSX.Element {
  return (
    <P className="text-sm text-zinc-500 uppercase sm:!text-zinc-400">{`${formatDate(
      from
    )} - ${formatDate(to)}`}</P>
  );
}
