import { Log } from 'core';
import { AccountProfilePatch } from 'core/api';
import { StoreManagerFnOpt } from 'store/utils';

const log = Log('store.profile');

export const func = ({ dispatch, api }: StoreManagerFnOpt) => {
  const update = async () => {
    try {
      log.info('updating profile');
      const data = await api.getAccountProfile();
      log.info('updating profile done, data=', data);
      dispatch({ type: 'profile/Set', data });
    } catch (err: unknown) {
      log.err('updating profile err=', err);
    }
  };

  const modify = async (modData: AccountProfilePatch) => {
    try {
      log.info('modify profile, modData=', modData);
      const data = await api.modifyAccountProfile(modData);
      log.info('modify profile done, data=', data);
      dispatch({ type: 'profile/Modify', data });
    } catch (err: unknown) {
      log.err('modify profile err=', err);
    }
  };

  return { update, modify };
};
