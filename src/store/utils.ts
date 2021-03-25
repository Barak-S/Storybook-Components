import { useDispatch as reduxUseDispatch, useSelector as reduxUseSelector } from 'react-redux';
import { StoreAction } from './actions';
import { Dispatch } from 'redux';

import { StoreState } from './reducers';
import { Api } from 'core/api';

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
