import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.titleDay}>Day 7</Text>
        <Text style={styles.title}>Love and Accept Yourself</Text>
        <Image 
          style={{width: '100%', height: '100%', resizeMode: 'contain', top: -65}} 
          source={require('../../../assets/bg-header.png')} 
        />
      </View>
    );
  }
}

export default Header;