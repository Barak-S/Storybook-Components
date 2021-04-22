import { Log } from 'core';
import { UserSettings, UserUpdate } from 'core/api';
import { StoreManagerFnOpt } from 'store/utils';

const log = Log('store.user');

export const func = ({ dispatch, api }: StoreManagerFnOpt) => {
  const updateData = async () => {
    try {
      log.info('updating data');
      const { user: data } = await api.getUser();
      log.info('updating data done, data=', data);
      dispatch({ type: 'user/data/Set', data });
    } catch (err: unknown) {
      log.err('updating data err=', err);
    }
  };

  const modifyData = async (modData: UserUpdate) => {
    try {
      log.info('modify data, modData=', modData);
      const { user: data } = await api.modifyUser(modData);
      log.info('modify data done, data=', data);
      dispatch({ type: 'user/data/Modify', data });
    } catch (err: unknown) {
      log.err('modify data err=', err);
    }
  };

  const updateSettings = async () => {
    try {
      log.info('updating settings');
      const { settings: data } = await api.getUserSettings();
      log.info('updating settings done, data=', data);
      dispatch({ type: 'user/settings/Set', data });
    } catch (err: unknown) {
      log.err('updating settings err=', err);
    }
  };

  const modifySettings = async (modData: UserSettings) => {
    try {
      log.info('modify settings, modData=', modData);
      const { settings: data } = await api.modifyUserSettings(modData);
      log.info('modify settings done, data=', data);
      dispatch({ type: 'user/settings/Modify', data });
    } catch (err: unknown) {
      log.err('modify settings err=', err);
    }
  };

  return { updateData, modifyData, updateSettings, modifySettings };
};
