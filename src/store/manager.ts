import { getApiWithOpt } from 'core/api';
import { func as auth } from './auth/func';
import { func as profile } from './profile/func';
import { useSelector, useDispatch } from './utils';

export const useStoreManager = () => {
  const dispatch = useDispatch();
  const token = useSelector(s => s.auth.token);
  const api = getApiWithOpt({ token });
  return {
    auth: auth({ dispatch, api }),
    profile: profile({ dispatch, api }),
  };
};
