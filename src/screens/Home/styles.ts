import { StyleSheet } from 'react-native';
import global from '../../global/colors';

const stylesHome = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: global.colors.blue.primary,
  },
  contentContainer: {
    flex: 1,
    padding: 12,
  },
  callsSection: {
    flex: 2,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    backgroundColor: global.colors.blue.secondary,
    elevation: 5,
    shadowColor: '#000',
  },
  callsTitle: {
    textAlign: 'left',
    fontWeight: '700',
    fontSize: 12,
    marginBottom: 4,
  },
});

export default stylesHome;
