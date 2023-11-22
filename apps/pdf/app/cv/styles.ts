import { StyleSheet } from '@react-pdf/renderer';

export const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    margin: 20,
    gap: 20,
  },
  left: {
    flexGrow: 1,
  },
  right: {
    flexGrow: 2,
  },
});
