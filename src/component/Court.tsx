import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import {Face, Faces, setNewFace} from '../redux/baseSlice';
import {globalStyles} from './styles';

type CourtProps = {
  isPortrait: boolean;
};

export const Court = (props: CourtProps) => {
  const faces = useSelector((state: RootState) => state.base.faces);
  const currentFace = useSelector((state: RootState) => state.base.currentFace);

  const dispatch = useDispatch();

  const handlePress = (name: keyof Faces) => {
    dispatch(setNewFace(name));
  };

  function checkFaces(face: Face) {
    let j_fn = false;
    let q_fn = false;
    let k_fn = false;

    Object.entries(faces).forEach(([name, value]) => {
      if (name.startsWith('jack') && value) {
        j_fn = true;
      }
      if (name.startsWith('queen') && value) {
        q_fn = true;
      }
      if (name.startsWith('king') && value) {
        k_fn = true;
      }
    });

    if (face === 'jack') {
      return j_fn;
    }

    if (face === 'queen') {
      return !j_fn && q_fn;
    }

    if (face === 'king') {
      return !j_fn && !q_fn && k_fn;
    }
  }

  const faceFactory = ([name, state]: [string, boolean]) => {
    return (
      <TouchableHighlight
        key={name}
        onPress={() => handlePress(name as keyof Faces)}
        style={{
          ...styles.item,
          backgroundColor:
            name === currentFace
              ? 'red'
              : faces[name as keyof Faces]
              ? styles.item.backgroundColor
              : 'gray',
        }}
        underlayColor={globalStyles.touchArea.color}>
        <View>
          <Text>{name.at(0)?.toUpperCase()}</Text>
          <Text>{name.split('_')[1].at(0)?.toUpperCase()}</Text>
        </View>
      </TouchableHighlight>
    );
  };

  return (
    <View
      style={{
        ...styles.body,
        flexDirection: props.isPortrait ? 'column' : 'row',
      }}>
      {checkFaces('jack') ? (
        <View style={styles.block}>
          {Object.entries(faces).slice(0, 4).map(faceFactory)}
        </View>
      ) : (
        ''
      )}

      {checkFaces('queen') ? (
        <View style={styles.block}>
          {Object.entries(faces).slice(4, 8).map(faceFactory)}
        </View>
      ) : (
        ''
      )}

      {checkFaces('king') ? (
        <View style={styles.block}>
          {Object.entries(faces).slice(8).map(faceFactory)}
        </View>
      ) : (
        ''
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  block: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  item: {
    height: 70,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    ...globalStyles.touchArea,
  },
});
