import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  header: {
    height: Platform.OS === 'android' ? 310 : 315,
    backgroundColor: '#2D31AC',
    borderBottomLeftRadius: 30,
  },
  
  title: {
    color: '#fff',
    width: '65%',
    fontSize: 30,
    fontWeight: 'bold',
    top: 40,
    paddingHorizontal: 20,
  },

  titleDay: {
    color:'#fff',
    opacity: .5,
    textTransform: 'uppercase',
    top: 40,
    paddingHorizontal: 20,
  }
});

export default styles;