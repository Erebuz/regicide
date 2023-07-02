import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {globalStyles} from './styles';

export const GlobalAction = () => {
  return (
    <View style={styles.main}>
      <TouchableHighlight
        onPress={() => {}}
        style={styles.button}
        underlayColor={globalStyles.touchArea.color}>
        <View>
          <Text>2</Text>
        </View>
      </TouchableHighlight>

      <TouchableHighlight
        onPress={() => {}}
        style={styles.button}
        underlayColor={globalStyles.touchArea.color}>
        <View>
          <Text>2</Text>
        </View>
      </TouchableHighlight>

      <TouchableHighlight
        onPress={() => {}}
        style={styles.button}
        underlayColor={globalStyles.touchArea.color}>
        <View>
          <Text>2</Text>
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
