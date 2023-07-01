import {Button, Text} from 'react-native';
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
    <>
      <Text>
        {props.type.at(0)?.toUpperCase()} {stat}
      </Text>

      <Button title="+1" onPress={() => handlePress(1)} />

      <Button title="-1" onPress={() => handlePress(-1)} />

      <Button title="-5" onPress={() => handlePress(-5)} />
    </>
  );
};
