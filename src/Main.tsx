import {Dimensions, StyleSheet, View} from 'react-native';
import {Court} from '../component/Court';
import {StatComponent} from '../component/StatComponent';
import {useEffect, useState} from 'react';

function getIsPortrait() {
  const screen = Dimensions.get('screen');
  return screen.height > screen.width;
}

export const Main = () => {
  const [isPortrait, setIsPortrait] = useState(getIsPortrait);

  useEffect(() => {
    Dimensions.addEventListener('change', () => setIsPortrait(getIsPortrait));
    return () => {};
  }, []);

  return (
    <View style={styles.main}>
      <Court />

      <View
        style={{
          ...styles.statsWrapper,
          flexDirection: isPortrait ? 'column' : 'row',
        }}>
        <View style={{...styles.stat, width: isPortrait ? '100%' : '50%'}}>
          <StatComponent />
        </View>

        <View style={{...styles.stat, width: isPortrait ? '100%' : '50%'}}>
          <StatComponent />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1
  },
  statsWrapper: {display: 'flex'},
  stat: {},
});
