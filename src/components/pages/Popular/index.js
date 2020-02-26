import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';

import IconTree from '../../../assets/icon-tree.png';
import IconBird from '../../../assets/icon-bird.png';

import styles from './styles';

class Popular extends Component {
  render() {
    return (
      <View style={styles.containerPopular}>
        <View style={styles.containerTitlePopular}>
          <Text style={styles.titleSection}>Popular</Text> 
          <TouchableOpacity>
            <Text style={styles.titleMorePopular}>See All</Text>
          </TouchableOpacity>
        </View>

        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          <View style={styles.boxScroll}>
            <ImageBackground source={IconTree} style={{width: 100, height: 125, right:20, top: 30, position: 'absolute'}}>
            </ImageBackground>
            <View style={styles.boxDescription}>
              <Text style={styles.titleBoxScroll}>Anxiety</Text>
              <Text style={styles.titleBoxScrollDescription}>Turn down the stress volume</Text>
              <Text style={styles.titleBoxScrollDescriptionTime}>7 steps | 5-11 min</Text>
            </View>
          </View>

          <View style={[styles.boxScroll, styles.boxScrollTwo]}>
            <ImageBackground source={IconBird} style={{width: 100, height: 125, right:20, top: 30, position: 'absolute'}}>
            </ImageBackground>
            <View style={styles.boxDescription}>
              <Text style={styles.titleBoxScroll}>Anxiety</Text>
              <Text style={styles.titleBoxScrollDescription}>Turn down the stress volume</Text>
              <Text style={styles.titleBoxScrollDescriptionTime}>5 steps | 5-11 min</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Popular;