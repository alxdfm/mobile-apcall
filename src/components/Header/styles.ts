import { StyleSheet } from 'react-native';
import global from '../../global/colors';

const stylesHeader = StyleSheet.create({
  container: {
    width: '100%',
    height: 32,
    backgroundColor: global.colors.blue.primary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    borderBottomColor: global.colors.blue.secondary,
    borderBottomWidth: 4,
    elevation: 10,
  },
});

export default stylesHeader;
