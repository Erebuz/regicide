import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import {updateHealth, updateWeapon} from '../redux/baseSlice';
import {globalStyles} from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export type StatProps = {
  type: 'weapon' | 'health';
};
export const StatComponent = (props: StatProps) => {
  const stat = useSelector((state: RootState) => state.base[props.type]);

  const dispatch = useDispatch();
  const handlePress = (val: number) => {
    if (props.type === 'health') {
      dispatch(updateHealth(val));
    } else {
      dispatch(updateWeapon(val));
    }
  };

  return (
    <View style={styles.statBlock}>
      <View style={styles.statWrapper}>
        <Icon
          name={props.type === 'weapon' ? 'sword' : 'heart'}
          size={40}
          style={{...styles.icon, ...globalStyles.iconStat}}
        />

        <Text style={styles.text}>{stat}</Text>
      </View>

      <View style={styles.buttons}>
        <TouchableHighlight
          onPress={() => handlePress(1)}
          style={styles.button}
          underlayColor={globalStyles.touchArea.color}>
          <Text style={styles.buttonText}>+1</Text>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={() => handlePress(-1)}
          style={styles.button}
          underlayColor={globalStyles.touchArea.color}>
          <Text style={styles.buttonText}>-1</Text>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={() => handlePress(-5)}
          style={styles.button}
          underlayColor={globalStyles.touchArea.color}>
          <Text style={styles.buttonText}>-5</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  statBlock: {
    display: 'flex',
    alignItems: 'center',
  },

  statWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 90,
  },

  icon: {
    marginRight: 10,
    marginTop: 2,
  },

  text: {
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
  },

  buttons: {
    display: 'flex',
    flexDirection: 'row',
  },

  button: {
    width: 50,
    height: 50,
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightblue',
    borderRadius: 10,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 26,
  },
});
