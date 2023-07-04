import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import {Court} from './component/Court';
import {StatComponent} from './component/StatComponent';
import {useEffect, useState} from 'react';
import {GlobalAction} from './component/GlobalAction';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from './redux/store';
import {Faces, refreshAll} from './redux/baseSlice';
import {globalStyles} from './component/styles';

function getIsPortrait() {
  const screen = Dimensions.get('screen');
  return screen.height > screen.width;
}

export const Main = () => {
  const [isPortrait, setIsPortrait] = useState(getIsPortrait);

  const dispatch = useDispatch();

  useEffect(() => {
    Dimensions.addEventListener('change', () => setIsPortrait(getIsPortrait));
    return () => {};
  }, []);

  const court = useSelector((state: RootState) => state.base.faces);
  function checkCourt() {
    for (const face in court) {
      if (court[face as keyof Faces]) {
        return true;
      }
    }
    return false;
  }

  const handleRefresh = () => {
    dispatch(refreshAll({}));
  };

  return checkCourt() ? (
    <View style={styles.main}>
      <View
        style={{
          ...styles.body,
          maxHeight: isPortrait ? 600 : 360,
          maxWidth: isPortrait ? 360 : 600,
        }}>
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
    </View>
  ) : (
    <TouchableHighlight onPress={handleRefresh} style={{flex: 1}}>
      <View style={styles.win}>
        <Text style={styles.winText}>You Win!</Text>

        <Text style={styles.winText}>Play again?</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    paddingTop: 20,
    paddingBottom: 20,
  },
  body: {
    flex: 1,
    justifyContent: 'space-between',
  },
  statsWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  win: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  winText: {
    color: 'red',
    fontSize: 30,
    fontWeight: 'bold',
  },
  touchArea: {
    ...globalStyles.touchArea,
  },
});
