import { useAppStore } from '@/store';
import { usersSateSelector } from '@/store/slices/usersSlice';

export const Users = () => {
  const { list, loading, fetchUsersList, addRandomUser, removeUser } = useAppStore(usersSateSelector);

  React.useEffect(() => {
    const fnResult = fetchUsersList();

    return () => {
      fnResult.controller.abort();
    };
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Users</h2>
      {list?.length ? (
        <ul>
          {list.map((item) => {
            return (
              <li key={item.id} onClick={() => removeUser(item.id)}>
                {item.name}
              </li>
            );
          })}
        </ul>
      ) : (
        <p>There are not users!</p>
      )}
      <button
        onClick={() =>
          addRandomUser({
            name: `Name - ${Date.now()}`,
            id: Date.now(),
          })
        }
      >
        Add a random user
      </button>
    </div>
  );
};

export default React.memo(Users);
