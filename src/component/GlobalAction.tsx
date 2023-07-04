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

  function buttonFactory(icon: string, foo: () => void) {
    return (
      <TouchableHighlight
        onPress={foo}
        style={styles.button}
        underlayColor={globalStyles.touchArea.color}>
        <View>
          <Icon
            name={icon}
            size={styles.button.width}
            style={globalStyles.icon}
          />
        </View>
      </TouchableHighlight>
    );
  }

  return (
    <View style={styles.main}>
      {buttonFactory('skull-crossbones-outline', handlePressKill)}

      {buttonFactory('cross-outline', handlePressRestore)}

      {buttonFactory('restore-alert', handlePressRefresh)}
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
