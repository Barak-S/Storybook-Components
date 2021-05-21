import { Log } from 'core';
import { StoreManagerFnOpt } from 'store/utils';

const log = Log('store.orgs');

export const useFunc = ({ dispatch, api }: StoreManagerFnOpt) => {
  const updateProducts = async () => {
    try {
      log.debug('update products');
      const { data } = await api.paywall.products();
      log.debug('update products done, data=', data);
      dispatch({ type: 'paywall/prodcuts/Set', data });
      return data;
    } catch (err: unknown) {
      log.err('update err=', err);
      throw err;
    }
  };

  return { updateProducts };
};
