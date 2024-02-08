import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  touchable: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
    paddingBottom: 5,
  },
  name: {
    fontSize: 18,
    marginLeft: 10,
    flex: 1,
    flexWrap: 'wrap',
    fontWeight: 'bold',
  },
  store: {
    fontSize: 18,
    marginLeft: 10,
    flex: 1,
    flexWrap: 'wrap',
  },
  priority: {
    fontSize: 18,
    marginLeft: 10,
    flex: 1,
    fontWeight: 'bold',
    flexWrap: 'wrap',
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  date: {
    fontSize: 18,
    marginLeft: 10,
    flex: 1,
    flexWrap: 'wrap',
  },
});

export default styles;