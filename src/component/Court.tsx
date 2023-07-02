import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import {Face, setNewFace} from '../redux/baseSlice';
import {globalStyles} from './styles';

type CourtProps = {
  isPortrait: boolean;
};

export const Court = (props: CourtProps) => {
  const faces = useSelector((state: RootState) => state.base.faces);

  const dispatch = useDispatch();

  const handlePress = (type: any) => {
    dispatch(setNewFace(type));
  };

  return (
    <View
      style={{
        ...styles.body,
        flexDirection: props.isPortrait ? 'column' : 'row',
      }}>
      <View
        style={{
          width: props.isPortrait ? '100%' : '50%',
          flexDirection: 'row',
        }}>
        {Object.entries(faces)
          .slice(0, 6)
          .map(([name, state]) => {
            return (
              <TouchableHighlight
                key={name}
                onPress={() => handlePress(name.split('_')[0])}
                style={styles.item}
                underlayColor={globalStyles.touchArea.color}>
                <View>
                  <Text>{name.at(0)?.toUpperCase()}</Text>
                  <Text>{name.split('_')[1].at(0)?.toUpperCase()}</Text>
                </View>
              </TouchableHighlight>
            );
          })}
      </View>

      <View
        style={{
          width: props.isPortrait ? '100%' : '50%',
          flexDirection: 'row',
        }}>
        {Object.entries(faces)
          .slice(6)
          .map(([name, state]) => {
            return (
              <TouchableHighlight
                key={name}
                onPress={() => handlePress(name.split('_')[0])}
                style={styles.item}
                underlayColor={globalStyles.touchArea.color}>
                <View>
                  <Text>{name.at(0)?.toUpperCase()}</Text>
                  <Text>{name.split('_')[1].at(0)?.toUpperCase()}</Text>
                </View>
              </TouchableHighlight>
            );
          })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
  },
  block: {
    height: '100%',
  },
  item: {
    height: '100%',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    ...globalStyles.touchArea,
  },
});
