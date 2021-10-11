import * as React from 'react';
import { useEffect } from 'react';
import {
  ListRenderItem,
  Text,
  TextInput,
  TextInputBase,
  View,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import useConstant from '../hooks/useContant';
import {
  filterValidTimeZones,
  formatTimeZones,
  listTimeZones,
  matchTimeZone,
  searchTimeZones,
  sortTimeZones,
  TimeZoneName,
} from '../libs/timezone';
import tw from '../libs/tw';

export default function SettingScreen() {
  const availableTimeZones = useConstant(() =>
    sortTimeZones(filterValidTimeZones(listTimeZones()))
  );
  const [search, setSearch] = React.useState('');
  const [timeZones, setTimeZones] = React.useState(availableTimeZones);

  const renderItem: ListRenderItem<TimeZoneName> = ({ item }) => {
    let style = tw('hidden');
    if (matchTimeZone(item, search)) style = {};
    return <Text style={style}>{item}</Text>;
  };

  return (
    <View>
      <TextInput
        style={tw('px-4 py-3 rounded-none')}
        onChangeText={setSearch}
      />
      <SafeAreaView style={tw('h-full')}>
        <FlatList data={timeZones} renderItem={renderItem} />
      </SafeAreaView>
    </View>
  );
}
