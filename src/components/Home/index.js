import React, { Component } from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';

import styles from './styles';

import Header from '../pages/Header';
import Popular from '../pages/Popular';
import New from '../pages/New';

class Home extends Component {
  render() {
    return(
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <Header />
            <Popular />
            <New />
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

export default Home;