import { Log } from 'core';
import { OrganizationUpdate } from 'core/api';
import { StoreManagerFnOpt, useSelector } from 'store/utils';
import { stateToCurOrgId } from './selectors';

const log = Log('store.orgs');

export const useFunc = ({ dispatch, api }: StoreManagerFnOpt) => {
  const curOrgId = useSelector(stateToCurOrgId);

  const update = async () => {
    try {
      log.info('update');
      const { data } = await api.orgs.list();
      log.info('update done, data=', data);
      dispatch({ type: 'orgs/items/Set', data });
      return data;
    } catch (err: unknown) {
      log.err('update err=', err);
      throw err;
    }
  };

  const updateAndCheckCurrent = async () => {
    const items = await update();
    if (!curOrgId && items.length) {
      dispatch({ type: 'orgs/cur/Set', id: items[0].id });
    }
  };

  // Current organization

  const setCurrent = (id: string) => dispatch({ type: 'orgs/cur/Set', id });

  const modify = async (orgId: string, newData: OrganizationUpdate) => {
    log.info('modify, orgId=', orgId, ', data=', newData);
    const data = await api.orgs.modify(orgId, newData);
    log.info('modify, orgId=', orgId, ' done');
    dispatch({ type: 'orgs/items/data/Modify', data, id: orgId });
  };

  const modifyCurrent = async (newData: OrganizationUpdate) => {
    if (!curOrgId) {
      throw new Error('Trying to modify current organization when it is empty');
    }
    return modify(curOrgId, newData);
  };

  return { update, updateAndCheckCurrent, setCurrent, modify, modifyCurrent };
};
