import { useAppStore } from '@/store';

export const Header = () => {
  React.useEffect(() => {
    const unsub = useAppStore.subscribe((state) => state.count.count, console.log);

    return () => {
      unsub();
    };
  }, []);

  return <div>Header</div>;
};

export default Header;
