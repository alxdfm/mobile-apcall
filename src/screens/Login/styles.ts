import { StyleSheet } from 'react-native';
import global from '../../global/variables';

const stylesLogin = (height?: number) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: global.colors.blue.primary,
      alignItems: 'center',
      justifyContent: 'center',
      height: height,
    },
    logoContainer: {
      marginTop: 16,
      marginBottom: 24,
    },
    loginContainer: {
      width: 320,
      height: 280,
      borderRadius: 20,
      padding: 20,
      elevation: 10,
      backgroundColor: global.colors.blue.secondary,
    },
    title: {
      fontSize: global.fontSize.large,
      fontWeight: '800',
      textAlign: 'center',
      marginBottom: 12,
    },
    description: {
      fontSize: global.fontSize.small,
      textAlign: 'center',
    },
    inputs: {
      backgroundColor: global.colors.neutral.white,
      marginTop: 12,
      borderRadius: 4,
      textAlign: 'center',
    },
    loginOrSigninContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 12,
    },
    signin: {
      fontSize: global.fontSize.miniSmall,
    },
  });

export default stylesLogin;
