import { StyleSheet, Font } from '@react-pdf/renderer';

Font.registerHyphenationCallback((word) => [word]);
Font.register({
  family: 'Inter',
  fonts: [
    { src: './fonts/inter/Inter-Regular.ttf/' },
    { src: './fonts/inter/Inter-SemiBold.ttf/', fontWeight: 600 },
  ],
});
Font.register({
  family: 'Inter Tight',
  src: './fonts/inter-tight/InterTight-Regular.ttf/',
});

export const baseColor = '#71717a';
export const accentColor = '#09090b';

export const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    margin: 29,
    marginLeft: 30,
    marginRight: 27,
    gap: 18,
    fontSize: 12,
    fontFamily: 'Inter',
    color: baseColor,
  },
  left: {
    width: '27%',
    textAlign: 'right',
  },
  right: {
    width: '60%',
  },
  h3: {
    fontSize: 14,
    marginBottom: 6,
    fontWeight: 600,
    color: accentColor,
  },
  p: {
    fontSize: 12,
    marginBottom: 4,
    fontFamily: 'Inter Tight',
    fontWeight: 300,
  },
  small: {
    fontSize: 10,
  },
  date: {
    fontSize: 10,
    textTransform: 'uppercase',
    color: accentColor,
  },
  section: {
    marginBottom: 16,
  },
});

export const infoStyles = StyleSheet.create({
  wrapper: {
    marginBottom: 38,
  },
  logo: {
    marginTop: 18,
    marginRight: -9,
    marginBottom: 10,
    marginLeft: 'auto',
  },
  name: {
    fontSize: 16,
    fontWeight: 600,
    marginBottom: 4,
    color: accentColor,
  },
  title: {
    fontSize: 14,
    marginBottom: 12,
    color: accentColor,
  },
});
