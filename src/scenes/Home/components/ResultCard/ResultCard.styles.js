import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  root: {
    marginHorizontal: 16,
  },
  title: {
    marginHorizontal: 16,
    color: 'white',
  },
  textLight: {
    marginHorizontal: 16,
    color: 'rgba(255,255,255,0.58)',
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  card: {
    marginTop: 16,
  },
  textBold: {
    color: '#fff',
  },
  barbellCanvas: {
    flex: 3,
    height: 150,
    marginLeft: -50,
    marginRight: 10,
  },
  error: {
    color: '#F00',
  },
  textualResult: {
    flex: 2,
    paddingVertical: 10,
    marginLeft: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.02)',
  },
});
