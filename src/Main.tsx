import {Dimensions, StyleSheet, View} from 'react-native';
import {Court} from './component/Court';
import {StatComponent} from './component/StatComponent';
import {useEffect, useState} from 'react';
import {GlobalAction} from './component/GlobalAction';

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
      <Court isPortrait={isPortrait} />

      <View
        style={{
          ...styles.statsWrapper,
          flexDirection: isPortrait ? 'column' : 'row',
        }}>
        <View style={{width: isPortrait ? '100%' : '50%'}}>
          <StatComponent type={'health'} />
        </View>

        <View style={{width: isPortrait ? '100%' : '50%'}}>
          <StatComponent type={'weapon'} />
        </View>
      </View>

      <GlobalAction />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'black',
  },
  statsWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
  },
});
