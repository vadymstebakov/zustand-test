import { useFormDataStore } from '@/store/useFormDataStore';
import { useAppStore } from '@/store';
import { usersSateSelector } from '@/store/slices/usersSlice';

const Form = () => {
  const formDataStore = useFormDataStore();
  const { addRandomUser } = useAppStore(usersSateSelector);

  console.log(formDataStore);

  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    formDataStore.setValue({ fieldName: name, value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    addRandomUser({
      name: formDataStore.name,
      id: Date.now(),
    });
    formDataStore.setValue({ fieldName: 'name', value: '' });
  };

  return (
    <form onSubmit={submitHandler}>
      <p>
        <input name="name" placeholder="Name" type="text" onChange={changeHandler} value={formDataStore.name} />
      </p>
      <p>
        <button type="submit">Add Name To The Users</button>
      </p>
    </form>
  );
};

export default React.memo(Form);
