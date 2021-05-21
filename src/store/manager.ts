import { useFunc as useAuthFunc } from './auth/func';
import { useFunc as useOrgsFunc } from './orgs/func';
import { useFunc as useUserFunc } from './user/func';
import { useFunc as usePaywallFunc } from './paywall/func';
import { useApi, useDispatch } from './utils';

export const useStoreManager = () => {
  const dispatch = useDispatch();
  const api = useApi();
  return {
    auth: useAuthFunc({ dispatch, api }),
    user: useUserFunc({ dispatch, api }),
    orgs: useOrgsFunc({ dispatch, api }),
    paywall: usePaywallFunc({ dispatch, api }),
    api,
  };
};
