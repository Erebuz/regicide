/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';

import {Main} from './src/Main';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.view}>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <View style={styles.body}>
        <Main />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  view: {
    width: '100%',
    height: '100%',
  },
  body: {
    flex: 1,
  },
});

export default App;
