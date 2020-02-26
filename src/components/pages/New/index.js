import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';

import IconSun from '../../../assets/icon-sun.png';
import IconMoon from '../../../assets/icon-moon.png';

import styles from './styles';

class New extends Component {
  render() {
    return (
      <View style={styles.containerPopular}>
        <View style={styles.containerTitlePopular}>
          <Text style={styles.titleSection}>New</Text> 
          <TouchableOpacity>
            <Text style={styles.titleMorePopular}>See All</Text>
          </TouchableOpacity>
        </View>

        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            <View style={styles.boxScroll}>
              <ImageBackground source={IconSun} style={{width: 294, height: 125, top: 50, position: 'absolute'}}>
              </ImageBackground>
              <View style={styles.boxDescription}>
                <Text style={styles.titleBoxScroll}>Happiness</Text>
                <Text style={styles.titleBoxScrollDescription}>Daily Calm</Text>
                <Text style={styles.titleBoxScrollDescriptionTime}>7 steps | 3-11 min</Text>
              </View>
            </View>

            <View style={[styles.boxScroll, styles.boxScrollTwo]}>
              <ImageBackground source={IconMoon} style={{width: 294, height: 125, top: 50, position: 'absolute'}}>
              </ImageBackground>
              <View style={styles.boxDescription}>
                <Text style={styles.titleBoxScroll}>Happiness</Text>
                <Text style={styles.titleBoxScrollDescription}>Daily Calm</Text>
                <Text style={styles.titleBoxScrollDescriptionTime}>7 steps | 3-11 min</Text>
              </View>
            </View>
        </ScrollView>
      </View>
    );
  }
}

export default New;