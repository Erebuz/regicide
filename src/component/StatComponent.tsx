import {Button, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import {updateHealth, updateWeapon} from '../redux/baseSlice';

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
      <Text style={styles.text}>
        {props.type.at(0)?.toUpperCase()} {stat}
      </Text>

      <View style={styles.buttons}>
        <TouchableHighlight
          onPress={() => handlePress(1)}
          style={styles.button}>
          <Text>+1</Text>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={() => handlePress(-1)}
          style={styles.button}>
          <Text>-1</Text>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={() => handlePress(-5)}
          style={styles.button}>
          <Text>-5</Text>
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

  text: {
    fontSize: 40,
    color: 'white',
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
});
