import { StoredForms } from 'core/types';
import { StoreManagerFnOpt } from 'store/utils';

export const useFunc = ({ dispatch }: StoreManagerFnOpt) => {
  const set = <K extends keyof StoredForms>(name: K, data: StoredForms[K]) => {
    dispatch({ type: 'forms/Set', name, data });
  };
  const modify = <K extends keyof StoredForms>(name: K, data: Partial<StoredForms[K]>) => {
    dispatch({ type: 'forms/Modify', name, data });
  };
  const reset = <K extends keyof StoredForms>(name: K) => {
    dispatch({ type: 'forms/Reset', name });
  };

  return { set, modify, reset };
};
