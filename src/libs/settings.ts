import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-community/async-storage';

const storage: Storage = new Storage({
  // Max key size, can probably be lower
  size: 1000,
  // Device storage
  storageBackend: AsyncStorage,
  // null == never
  defaultExpires: null,
  // Cache data in memory for quick access.
  enableCache: true,
});

function getSettingStorage(): Storage {
  return storage;
}

function formatKey(key: string): string {
  return key.replaceAll('_', '');
}

export async function settingFetch(
  keyString: string,
  fallback: any
): Promise<any> {
  const key = formatKey(keyString);
  const data = await getSettingStorage().load({ key });
  return data ?? fallback;
}

export async function settingUpdate(
  keyString: string,
  data: any
): Promise<void> {
  const key = formatKey(keyString);
  await getSettingStorage().save({ key, data });
}
