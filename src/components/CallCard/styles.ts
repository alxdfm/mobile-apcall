import { StyleSheet } from 'react-native';
import global from '../../global/variables';

const stylesCallCard = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: global.colors.neutral.lightGray,
    padding: 4,
    marginBottom: 4,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: global.fontSize.small,
    fontWeight: '500',
  },
  description: {
    marginTop: 4,
    marginBottom: 4,
    fontSize: global.fontSize.small,
  },
});

export default stylesCallCard;
