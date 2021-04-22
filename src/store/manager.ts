import { getApiWithOpt } from 'core/api';

import { func as auth } from './auth/func';
import { func as user } from './user/func';
import { useDispatch, useSelector } from './utils';

export const useStoreManager = () => {
  const dispatch = useDispatch();
  const token = useSelector(s => s.auth.token);
  const api = getApiWithOpt({ token });
  return {
    auth: auth({ dispatch, api }),
    user: user({ dispatch, api }),
  };
};
