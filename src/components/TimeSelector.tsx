import React, { Dispatch, SetStateAction } from 'react';
import { Platform, Text, View } from 'react-native';
import { TimeZoneName } from '../libs/timezone';
import tw from '../libs/tw';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function TimeSelector({
  time,
  zone,
  setTime,
}: {
  time: number;
  zone: TimeZoneName;
  setTime: Dispatch<SetStateAction<number>>;
}) {
  const onChange = (event: any, selectedDate: Date) => {
    const currentDate = selectedDate || new Date(time);
    setTime(currentDate.getTime());
  };

  return (
    <View style={tw('h-20')}>
      {/* <DateTimePicker value={new Date(time)} mode={'time'} display="inline" /> */}
    </View>
  );
}
