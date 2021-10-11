import { useState } from 'react';
import { settingUpdate } from '../libs/settings';

export enum SettingStatus {
  LOADING,
  SAVING,
  SAVED,
  ERROR,
}

export default function useSettings(keyString: string, defaultData: any) {
  const [setting, setSetting] = useState(defaultData);
  const updateSetting = async (data: any) => {
    await settingUpdate(keyString, data);
    setSetting(data);
  };

  return [setting, updateSetting];
}
