import { Log } from 'core';
import { EventCreate, EventThemeCreate, EventThemeUpdate, EventUpdate } from 'core/api';
import { stateToCurOrgId } from 'store/orgs/selectors';
import { StoreManagerFnOpt, useSelector } from 'store/utils';

const log = Log('store.events');

export const useFunc = ({ dispatch, api }: StoreManagerFnOpt) => {
  const curOrgId = useSelector(stateToCurOrgId);

  const getNoOrgErr = () => new Error('Trying to perform action when current org is empty');

  const updateItems = async () => {
    if (!curOrgId) throw getNoOrgErr();
    try {
      log.info('update items');
      const { data } = await api.events.list(curOrgId);
      log.info('update items done, data=', data);
      dispatch({ type: 'events/items/Set', data });
      return data;
    } catch (err: unknown) {
      log.err('update items err=', err);
      throw err;
    }
  };

  const createItem = async (newData: EventCreate) => {
    if (!curOrgId) throw getNoOrgErr();
    try {
      log.info('create item');
      const { data } = await api.events.create(curOrgId, newData);
      log.info('create item done, data=', data);
      dispatch({ type: 'events/items/Add', data });
      return data;
    } catch (err: unknown) {
      log.err('create item err=', err);
      throw err;
    }
  };

  const modifyItem = async (id: string, newData: EventUpdate) => {
    if (!curOrgId) throw getNoOrgErr();
    try {
      log.info('modify item');
      const { data } = await api.events.modify(curOrgId, id, newData);
      log.info('modify item done, data=', data);
      dispatch({ type: 'events/items/Modify', id, data });
      return data;
    } catch (err: unknown) {
      log.err('modify item err=', err);
      throw err;
    }
  };

  const removeItem = async (id: string) => {
    if (!curOrgId) throw getNoOrgErr();
    try {
      log.info('remove item');
      await api.events.remove(curOrgId, id);
      log.info('remove item done');
      dispatch({ type: 'events/items/Remove', id });
    } catch (err: unknown) {
      log.err('remove item err=', err);
      throw err;
    }
  };

  const updateThemes = async () => {
    if (!curOrgId) throw getNoOrgErr();
    try {
      log.info('update themes');
      const { data } = await api.themes.list(curOrgId);
      log.info('update themes done, data=', data);
      dispatch({ type: 'events/themes/Set', data });
      return data;
    } catch (err: unknown) {
      log.err('update themes err=', err);
      throw err;
    }
  };

  const createTheme = async (newData: EventThemeCreate) => {
    if (!curOrgId) throw getNoOrgErr();
    try {
      log.info('create theme');
      const { data } = await api.themes.create(curOrgId, newData);
      log.info('create theme done, data=', data);
      dispatch({ type: 'events/themes/Add', data });
      return data;
    } catch (err: unknown) {
      log.err('create theme err=', err);
      throw err;
    }
  };

  const modifyTheme = async (id: string, newData: EventThemeUpdate) => {
    if (!curOrgId) throw getNoOrgErr();
    try {
      log.info('modify theme');
      const { data } = await api.themes.modify(curOrgId, id, newData);
      log.info('modify theme done, data=', data);
      dispatch({ type: 'events/themes/Modify', id, data });
      return data;
    } catch (err: unknown) {
      log.err('modify theme err=', err);
      throw err;
    }
  };

  const removeTheme = async (id: string) => {
    if (!curOrgId) throw getNoOrgErr();
    try {
      log.info('remove theme');
      await api.themes.remove(curOrgId, id);
      log.info('remove theme done');
      dispatch({ type: 'events/themes/Remove', id });
    } catch (err: unknown) {
      log.err('remove theme err=', err);
      throw err;
    }
  };

  return { updateItems, createItem, modifyItem, removeItem, updateThemes, createTheme, modifyTheme, removeTheme };
};
