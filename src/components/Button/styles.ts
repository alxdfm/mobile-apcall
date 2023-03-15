import { StyleSheet } from 'react-native';
import global from '../../global/variables';

const stylesButton = StyleSheet.create({
  button: {
    marginTop: 4,
    borderRadius: 4,
    alignSelf: 'flex-end',
  },
  textButton: {
    fontSize: global.fontSize.small,
    height: 28,
    padding: 2,
    borderRadius: 4,
    backgroundColor: global.colors.yellow.primary,
    elevation: 5,
  },
});

export default stylesButton;
