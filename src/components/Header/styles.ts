import { StyleSheet } from 'react-native';
import global from '../../global/colors';

const stylesHeader = StyleSheet.create({
  container: {
    width: '100%',
    height: 24,
    backgroundColor: global.colors.blue.primary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    elevation: 10,
  },
});

export default stylesHeader;
