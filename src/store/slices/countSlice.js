const initialState = {
  count: 0,
};

const createActions = (set) => {
  return {
    increment: () => {
      set(
        (state) => {
          state.count.count = state.count.count + 1;
        },
        false,
        {
          type: 'count/increment',
        }
      );
    },
    decrement: () => {
      set(
        (state) => {
          state.count.count = state.count.count - 1;
        },
        false,
        {
          type: 'count/decrement',
        }
      );
    },
  };
};

const countSlice = (set) => ({ count: { ...initialState, ...createActions(set) } });

export const countStateSelector = (state) => state.count;

export default countSlice;
