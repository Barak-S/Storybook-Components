import { createStore, ReducersMapObject } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistCombineReducers, PersistConfig, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { reducers, StoreState } from './reducers';

const persistConfig: PersistConfig<StoreState> = {
  key: 'store:v1',
  version: 5,
  migrate: async (persistedState, curVersion) => (persistedState?._persist.version !== curVersion ? undefined : persistedState),
  storage,
};

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
const persistedReducer = persistCombineReducers<StoreState>(persistConfig, reducers as ReducersMapObject<StoreState>);

export const store = createStore(persistedReducer, composeWithDevTools());
export const persistor = persistStore(store);
// persistor.purge();

export { StoreAction } from './actions';
export { StoreState } from './reducers';
export * from './manager';
export * from './utils';
export * from './orgs/selectors';
