import type { DatePoint } from 'data/experience';

const options = {
  year: 'numeric',
  month: 'short',
} as const;

type FormatDate = (date: DatePoint, locale?: string) => string;
export const formatDate: FormatDate = ({ year, month }, locale = 'en-GB') =>
  new Date(`${year}-${month}-01`).toLocaleDateString(locale, options);
