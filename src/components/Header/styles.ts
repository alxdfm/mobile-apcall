import { StyleSheet } from 'react-native';
import global from '../../global/colors';

const stylesHeader = StyleSheet.create({
  container: {
    width: '100%',
    height: 44,
    backgroundColor: global.colors.blue.primary,
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomColor: global.colors.blue.secondary,
    borderBottomWidth: 4,
  },
});

export default stylesHeader;
