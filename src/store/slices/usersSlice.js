const initialState = {
  list: null,
  loading: false,
};

const setLoading = (set, value) => {
  return set(
    (state) => {
      state.users.loading = value;
    },
    false,
    {
      type: 'users/loading',
      payload: value,
    }
  );
};

const createActions = (set) => {
  return {
    fetchUsersList: () => {
      const controller = new AbortController();

      const fireFetchUsersLust = async () => {
        try {
          setLoading(set, true);

          const response = await fetch('https://jsonplaceholder.typicode.com/users', {
            signal: controller.signal,
          });
          const data = await response.json();

          set(
            (state) => {
              state.users.list = data;
            },
            false,
            { type: 'users/list', payload: data }
          );
        } catch (error) {
          console.log(error.message);
        } finally {
          setLoading(set, false);
        }
      };
      fireFetchUsersLust();

      return { controller };
    },
    addRandomUser: (payload) => {
      set(
        (store) => {
          store.users.list.push(payload);
        },
        false,
        { type: 'user/addRandomUser', payload }
      );
    },
    removeUser: (id) => {
      set(
        (store) => {
          store.users.list = store.users.list.filter((item) => item.id !== id);
        },
        false,
        { type: 'user/removeUser', payload: id }
      );
    },
  };
};

const usersSlice = (set) => ({
  users: {
    ...initialState,
    ...createActions(set),
  },
});

export const usersSateSelector = (state) => state.users;

export default usersSlice;
