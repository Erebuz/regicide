/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {Main} from './src/Main';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <Main />
    </SafeAreaView>
  );
}

export default App;
