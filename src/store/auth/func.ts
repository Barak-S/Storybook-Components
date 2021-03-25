import Auth from '@aws-amplify/auth';
import { Log } from 'core';
import { StoreManagerFnOpt } from 'store/utils';

const log = Log('store.auth');

export const func = ({ dispatch }: StoreManagerFnOpt) => {
  const update = async () => {
    try {
      log.info('update cur session');
      const session = await Auth.currentSession();
      log.info('update cur session done, session=', session);
      const token = session.getIdToken().getJwtToken();
      dispatch({ type: 'auth/Set', token });
    } catch (err: unknown) {
      log.info('gettin cur session err=', err);
      dispatch({ type: 'auth/Set', token: undefined });
    }
  };

  const signOut = () => {
    dispatch({ type: 'auth/SignOut' });
  };

  return { update, signOut };
};
