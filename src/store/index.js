import create from 'zustand';
import { devtools, subscribeWithSelector, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { deepMerge } from '@/utils';
import countSlice from './slices/countSlice';
import usersSlice from './slices/usersSlice';

const persistOptions = {
  name: 'store',
  partialize: (state) => ({ count: { count: state.count.count } }),
  merge: (persistedState, currentState) => deepMerge(currentState, persistedState),
};

let store = (...args) => {
  return {
    ...countSlice(...args),
    ...usersSlice(...args),
  };
};
store = immer(store);
store = persist(store, persistOptions);
store = subscribeWithSelector(store);
store = create(import.meta.env.DEV ? devtools(store) : store);

export const useAppStore = store;
