import { useApi, useDispatch } from './utils';
import { useFunc as useAuthFunc } from './auth/func';
import { useFunc as useEventsFunc } from './events/func';
import { useFunc as useFormsFunc } from './forms/func';
import { useFunc as useOrgsFunc } from './orgs/func';
import { useFunc as usePaywallFunc } from './paywall/func';
import { useFunc as useUserFunc } from './user/func';

export const useStoreManager = () => {
  const dispatch = useDispatch();
  const api = useApi();
  return {
    auth: useAuthFunc({ dispatch, api }),
    user: useUserFunc({ dispatch, api }),
    orgs: useOrgsFunc({ dispatch, api }),
    paywall: usePaywallFunc({ dispatch, api }),
    events: useEventsFunc({ dispatch, api }),
    forms: useFormsFunc({ dispatch, api }),
    api,
  };
};
