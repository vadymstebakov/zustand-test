import { useAppStore } from '@/store';

const Form = React.lazy(() => import('@/components/Form'));

export const Header = () => {
  React.useEffect(() => {
    const unsub = useAppStore.subscribe((state) => state.count.count, console.log);

    return () => {
      unsub();
    };
  }, []);

  return (
    <div>
      <div>Header</div>
      <React.Suspense fallback="Loading...">
        <Form />
      </React.Suspense>
    </div>
  );
};

export default Header;
