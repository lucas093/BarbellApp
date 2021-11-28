import {Dimensions, StyleSheet} from 'react-native';

const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  root: {
    flexDirection: 'column',
  },
  appName: {
    color: '#FFF',
    textAlign: 'center',
    marginHorizontal: 16,
    marginTop: 16,
  },
  mainCard: {
    margin: 16,
    paddingHorizontal: 4,
    paddingTop: 12,
    paddingBottom: 4,
  },
  background: {
    position: 'absolute',
    backgroundColor: '#6243EE',
    left: 0,
    top: 0,
    right: 0,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});
