import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

import {Main} from './src/Main';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import {Immersive} from 'react-native-immersive';

function App(): JSX.Element {
  Immersive.on();
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.view}>
        <StatusBar barStyle="light-content" backgroundColor="black" />

        <Main />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  view: {
    width: '100%',
    height: '100%',
  },
});

export default App;
