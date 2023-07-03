import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {globalStyles} from './styles';
import {useDispatch} from 'react-redux';
import {killFace, refreshAll, restoreFace} from '../redux/baseSlice';

export const GlobalAction = () => {
  const dispatch = useDispatch();

  const handlePressKill = () => {
    dispatch(killFace({}));
  };

  const handlePressRestore = () => {
    dispatch(restoreFace({}));
  };

  const handlePressRefresh = () => {
    dispatch(refreshAll({}));
  };

  return (
    <View style={styles.main}>
      <TouchableHighlight
        onPress={handlePressKill}
        style={styles.button}
        underlayColor={globalStyles.touchArea.color}>
        <View>
          <Text>Kill</Text>
        </View>
      </TouchableHighlight>

      <TouchableHighlight
        onPress={handlePressRestore}
        style={styles.button}
        underlayColor={globalStyles.touchArea.color}>
        <View>
          <Text>Res</Text>
        </View>
      </TouchableHighlight>

      <TouchableHighlight
        onPress={handlePressRefresh}
        style={styles.button}
        underlayColor={globalStyles.touchArea.color}>
        <View>
          <Text>Ref</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    ...globalStyles.touchArea,
  },
});
