import { StyleSheet } from 'react-native';
import global from '../../global/variables';

const stylesProgress = (callStatus?: string) =>
  StyleSheet.create({
    container: {
      marginTop: 8,
      borderRadius: 2,
    },
    progressFull: {
      backgroundColor: global.colors.neutral.white,
      borderRadius: 4,
      marginBottom: 4,
    },
    progress: {
      backgroundColor: '#0d0',
      height: 4,
      width: `${callStatus}%`,
      borderRadius: 4,
    },
    containerText: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
    },
    text: {
      fontSize: global.fontSize.smallest,
    },
  });

export default stylesProgress;
