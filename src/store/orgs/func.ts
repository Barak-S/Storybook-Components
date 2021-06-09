import { Log } from 'core';
import { OrganizationInviteCreate, OrganizationUpdate } from 'core/api';
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
    const curItem = items.find(itm => itm.id === curOrgId);
    if ((!curOrgId || !curItem) && items.length) {
      dispatch({ type: 'orgs/cur/Set', id: items[0].id });
    }
  };

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

  // Invites

  const updateInvites = async () => {
    if (!curOrgId) {
      throw new Error('Trying to modify current organization when it is empty');
    }
    log.info('updating invites');
    const { data } = await api.orgs.invites.list(curOrgId);
    log.info('updating invites done');
    dispatch({ type: 'orgs/items/invites/Set', id: curOrgId, data });
  };

  const createInvite = async (newData: OrganizationInviteCreate) => {
    if (!curOrgId) {
      throw new Error('Trying to modify current organization when it is empty');
    }
    log.info('create invite');
    const { data } = await api.orgs.invites.create(curOrgId, newData);
    log.info('create invite done');
    dispatch({ type: 'orgs/items/invites/Add', id: curOrgId, data });
  };

  return { update, updateAndCheckCurrent, setCurrent, modify, modifyCurrent, updateInvites, createInvite };
};
