import React, { Dispatch, SetStateAction } from 'react';
import { Text, View } from 'react-native';
import { TimeZoneName } from '../libs/timezone';
import tw from '../libs/tw';

export default function TimeSelector({
  time,
  zone,
  setTime,
}: {
  time: number;
  zone: TimeZoneName;
  setTime: Dispatch<SetStateAction<number>>;
}) {
  return (
    <View style={tw('h-20')}>
      <Text style={tw('text-red-400')}>Hey you!</Text>
    </View>
  );
}
