import { StyleSheet } from 'react-native';
import global from '../../global/variables';

const stylesLogin = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: global.colors.blue.primary,
    alignItems: 'center',
  },
  logoContainer: {
    marginTop: 16,
    marginBottom: 16,
  },
  loginContainer: {
    width: 280,
    height: 320,
    borderRadius: 20,
    padding: 20,
    elevation: 10,
    backgroundColor: global.colors.blue.secondary,
  },
  title: {
    fontSize: global.fontSize.large,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 8,
  },
  description: {
    fontSize: global.fontSize.small,
    textAlign: 'center',
  },
  inputs: {
    backgroundColor: global.colors.neutral.white,
    marginTop: 8,
    borderRadius: 4,
    textAlign: 'center',
  },
});

export default stylesLogin;
