import type { Position } from 'data/experience';
import { formatDate } from 'common/utils/format-date';
import P from './P';

type Props = Pick<Position, 'from' | 'to'>;

export default function Period({ from, to }: Props): JSX.Element {
  return <P>{`${formatDate(from)} - ${formatDate(to)}`}</P>;
}
