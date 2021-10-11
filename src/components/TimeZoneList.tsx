import React, { Dispatch, SetStateAction } from 'react';
import { ListRenderItem, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  changeTimeZone as renderTimeZone,
  TimeZoneName,
} from '../libs/timezone';
import tw from '../libs/tw';

const timeZones: TimeZoneName[] = [
  'local',
  'Australia/Melbourne',
  'Europe/Amsterdam',
  'America/New_York',
];

export default function TimeZoneList({
  time,
  zone,
  setZone,
}: {
  time: number;
  zone: TimeZoneName;
  setZone: Dispatch<SetStateAction<string>>;
}) {
  const renderItem: ListRenderItem<TimeZoneName> = ({ item }) => (
    <TimeZoneItem time={time} targetTimeZone={item} zone={zone} />
  );
  return (
    <SafeAreaView style={tw('h-full flex-shrink')}>
      <FlatList data={timeZones} renderItem={renderItem} />
    </SafeAreaView>
  );
}

function TimeZoneItem({
  targetTimeZone,
  time,
  zone,
}: {
  targetTimeZone: TimeZoneName;
  time: number;
  zone: TimeZoneName;
}) {
  return (
    <View>
      <Text>{targetTimeZone}</Text>
      <Text>{renderTimeZone(time, zone, targetTimeZone)}</Text>
    </View>
  );
}
