import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { useAppStore } from './index';

const initialState = {
  name: '',
};

const createActions = (set) => {
  return {
    setValue: ({ fieldName, value }) => {
      const count = useAppStore.getState().count.count;
      useAppStore.setState(
        (state) => {
          state.count.count = count + 1;
        },
        false,
        { type: 'changeOutside/count' }
      );

      set(
        (store) => {
          store[fieldName] = value;
        },
        false,
        { type: 'formData/setValue', payload: { fieldName, value } }
      );
    },
  };
};

const persistOptions = {
  name: 'form-data-store',
};

const devtoolsOptions = { name: 'form-data-store', serialize: { options: true } };

let store = (...args) => {
  return {
    ...initialState,
    ...createActions(...args),
  };
};

store = persist(store, persistOptions);
store = create(import.meta.env.DEV ? devtools(store, devtoolsOptions) : store);

export const useFormDataStore = store;
