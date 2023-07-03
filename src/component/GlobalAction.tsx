import {StyleSheet, TouchableHighlight, View} from 'react-native';
import {globalStyles} from './styles';
import {useDispatch} from 'react-redux';
import {killFace, refreshAll, restoreFace} from '../redux/baseSlice';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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
          <Icon name="skull-crossbones-outline" size={styles.button.width} />
        </View>
      </TouchableHighlight>

      <TouchableHighlight
        onPress={handlePressRestore}
        style={styles.button}
        underlayColor={globalStyles.touchArea.color}>
        <View>
          <Icon name="cross-outline" size={styles.button.width} />
        </View>
      </TouchableHighlight>

      <TouchableHighlight
        onPress={handlePressRefresh}
        style={styles.button}
        underlayColor={globalStyles.touchArea.color}>
        <View>
          <Icon name="restore-alert" size={styles.button.width} />
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
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    ...globalStyles.touchArea,
  },
});
