import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import Svg from 'react-native-svg';
import {Face, setFaceState, setNewFace} from '../redux/baseSlice';

export const Court = () => {
  const faces = useSelector((state: RootState) => state.base.faces);

  const dispatch = useDispatch();

  const handlePress = (type: Face) => {
    dispatch(setNewFace(type));
  };

  return (
    <View style={styles.body}>
      {Object.entries(faces).map(([name, state]) => (
        <TouchableOpacity
          key={name}
          onPress={() => handlePress(name.split('_')[0])}>
          <View style={styles.item}>
            <Text>{name.at(0)?.toUpperCase()}</Text>
            <Text>{name.split('_')[1].at(0)?.toUpperCase()}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    display: 'flex',
    flexDirection: 'row',
  },
  item: {
    margin: 10,
  },
});
