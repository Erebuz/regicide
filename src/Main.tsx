import {StyleSheet, Text, View} from 'react-native';
import {Court} from '../component/Court';
import {StatComponent} from '../component/StatComponent';

export const Main = () => {
  return (
    <>
      <View style={styles.main}>
        <Court />

        <View style={styles.statsWrapper}>
          <View style={styles.stat}>
            <StatComponent />
          </View>

          <View style={styles.stat}>
            <StatComponent />
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  main: {},
  statsWrapper: {},
  stat: {}
})
