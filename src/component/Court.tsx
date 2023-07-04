import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import {Face, Faces, setNewFace} from '../redux/baseSlice';
import {globalStyles} from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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

  function getSuit(name: keyof Faces) {
    const suit = name.split('_').at(1);

    if (suit === 'clubs') {
      return 'cards-club-outline';
    } else if (suit === 'diamonds') {
      return 'cards-diamond-outline';
    } else if (suit === 'spades') {
      return 'cards-spade-outline';
    } else if (suit === 'hearts') {
      return 'cards-heart-outline';
    } else {
      return '';
    }
  }

  const faceFactory = ([name, _]: [string, boolean]) => {
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
          <View style={styles.textWrapper}>
            <Text style={styles.text}>{name.at(0)?.toUpperCase()}</Text>
          </View>

          <Icon
            name={getSuit(name as keyof Faces)}
            size={styles.item.width}
            style={globalStyles.icon}
          />
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
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    ...globalStyles.touchArea,
  },
  textWrapper: {
    position: 'absolute',
    left: 3,
    bottom: 0,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
});
