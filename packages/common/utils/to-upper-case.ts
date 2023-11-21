type ToTitleCase = (a: string) => string;
export const toTitleCase: ToTitleCase = (a) =>
  a.replace(/\b\w/g, (s) => s.toUpperCase());
