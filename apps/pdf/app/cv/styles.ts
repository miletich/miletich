import { StyleSheet, Font } from '@react-pdf/renderer';

Font.registerHyphenationCallback((word) => [word]);

export const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    margin: 30,
    gap: 21,
    fontSize: 12,
    hyphens: 'none',
  },
  left: {
    width: '25%',
    textAlign: 'right',
  },
  right: {
    width: '60%',
  },
  h2: {
    fontSize: 16,
    marginBottom: 8,
  },
  h3: {
    fontSize: 14,
    marginBottom: 6,
  },
  li: {
    fontSize: 12,
    marginBottom: 4,
  },
  small: {
    fontSize: 10,
  },
  date: {
    fontSize: 10,
    textTransform: 'uppercase',
  },
  section: {
    marginBottom: 16,
  },
  logo: {
    marginRight: -10,
  },
});
