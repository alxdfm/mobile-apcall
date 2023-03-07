import { StyleSheet } from 'react-native';
import global from '../../global/variables';

const stylesHome = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: global.colors.blue.primary,
  },
  contentContainer: {
    flex: 1,
    padding: 12,
    paddingTop: 4,
  },
  title: {
    fontSize: global.fontSize.large,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 8,
  },
  callsOpen: {
    flex: 2,
    borderRadius: 4,
    padding: 8,
    backgroundColor: global.colors.blue.secondary,
    elevation: 2,
    shadowColor: global.colors.neutral.black,
  },
  callsTitle: {
    textAlign: 'left',
    fontWeight: '700',
    fontSize: global.fontSize.medium,
    marginBottom: 6,
  },
  createCallButton: {
    marginTop: 4,
    borderRadius: 4,
    alignSelf: 'flex-end',
  },
  textCreateCallButton: {
    fontSize: global.fontSize.small,
    padding: 4,
    borderRadius: 4,
    backgroundColor: global.colors.yellow.primary,
    elevation: 5,
  },
  callsClosed: {
    flex: 1,
    marginTop: 8,
    borderRadius: 4,
    padding: 8,
    backgroundColor: global.colors.blue.secondary,
    elevation: 2,
    shadowColor: '#000',
  },
  callsEmpty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  callsEmptyText: {
    color: global.colors.neutral.lightGray,
    fontSize: global.fontSize.medium,
  },
});

export default stylesHome;
