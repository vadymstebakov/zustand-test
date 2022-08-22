import reactLogo from './assets/react.svg';
import { useAppStore } from '@/store';
import { countStateSelector } from '@/store/slices/countSlice';
import Header from '@/components/Header';
import Users from '@/components/Users';
import './App.css';

function App() {
  const { increment, count } = useAppStore(countStateSelector);

  return (
    <div className="App">
      <Header />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={increment}>count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
      <Users />
    </div>
  );
}

export default App;
