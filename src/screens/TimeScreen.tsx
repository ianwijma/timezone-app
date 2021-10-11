import * as React from 'react';
import { View } from 'react-native';
import TimeSelector from '../components/TimeSelector';
import TimeZoneList from '../components/TimeZoneList';
import tw from '../libs/tw';

export default function TimeScreen() {
  const [time, setTime] = React.useState(Date.now());
  const [zone, setZone] = React.useState('local');

  return (
    <View style={tw('h-full')}>
      <TimeZoneList time={time} zone={zone} setZone={setZone} />
      <TimeSelector time={time} zone={zone} setTime={setTime} />
    </View>
  );
}
