import { Api, getApiWithOpt } from 'core/api';
import { useDispatch as reduxUseDispatch, useSelector as reduxUseSelector } from 'react-redux';
import { Dispatch } from 'redux';

import { StoreAction } from './actions';
import { StoreState } from './reducers';

export function useSelector<TSelected = unknown>(
  selector: (state: StoreState) => TSelected,
  equalityFn?: (left: TSelected, right: TSelected) => boolean,
): TSelected {
  return reduxUseSelector(selector, equalityFn);
}

export type StoreDispatch = Dispatch<StoreAction>;

type StoreDispatchFn = () => StoreDispatch;

export const useDispatch: StoreDispatchFn = reduxUseDispatch;

export interface StoreManagerFnOpt {
  dispatch: StoreDispatch;
  api: Api;
}

export const useApi = () => {
  const token = useSelector(s => s.auth.token);
  return getApiWithOpt({ token });
};
