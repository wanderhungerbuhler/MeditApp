import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  containerPopular: {
    marginTop: 70, 
  },

  containerTitlePopular: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',  
    marginBottom: 15,  
    paddingHorizontal: 15, 
  },

  titleSection: {
    fontSize: 25,
  },

  titleMorePopular: {
    color: '#4A80F0',
    fontSize: 16,
  },

  boxScroll: {
    width: 294,
    height: 165,
    flexDirection: 'row',
    backgroundColor: '#2D73D5',
    borderRadius: 24,
    padding: 20,
    marginLeft: 15,
    marginBottom: 15,
    overflow: 'hidden',
  },

  boxDescription: {
    width: '60%',
    justifyContent: 'space-between',
  },

  boxScrollTwo: {
    backgroundColor: '#44AFE3',
  },

  titleBoxScroll: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },

  titleBoxScrollDescription: {
    color: '#fff',
    fontSize: 16,
  },

  titleBoxScrollDescriptionTime: {
    color: '#fff',
    fontSize: 12,
  }
});

export default styles;