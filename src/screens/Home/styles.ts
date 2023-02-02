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
    paddingTop: 4,
  },
  title: {
    fontSize: 16,
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
    fontSize: 12,
    marginBottom: 4,
  },
  createCallButton: {
    marginTop: 4,
    borderRadius: 4,
    alignSelf: 'flex-end',
  },
  textCreateCallButton: {
    fontSize: 10,
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
    fontSize: 12,
  },
});

export default stylesHome;
