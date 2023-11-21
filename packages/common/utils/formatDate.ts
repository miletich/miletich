import type { DatePoint } from 'data/experience';
import { locale } from '../../../apps/web/app/consts';

const options = {
  year: 'numeric',
  month: 'short',
} as const;

type FormatDate = (date: DatePoint) => string;
export const formatDate: FormatDate = ({ year, month }) =>
  new Date(`${year}-${month}-01`).toLocaleDateString(locale, options);
