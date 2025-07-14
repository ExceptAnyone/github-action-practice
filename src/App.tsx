import { useState } from 'react';
import './App.css';

interface AppProps {
  title?: string;
  showCounter?: boolean;
  initialCount?: number;
  theme?: 'light' | 'dark';
}

function App({
  title = 'React + Storybook',
  showCounter = true,
  initialCount = 0,
  theme = 'light',
}: AppProps) {
  const [count, setCount] = useState(initialCount);

  return (
    <div className={`app ${theme}`}>
      <header className="app-header">
        <h1>{title}</h1>
        <p>Welcome to our Storybook testing environment!</p>

        {showCounter && (
          <div className="counter-section">
            <p>Counter: {count}</p>
            <div className="button-group">
              <button onClick={() => setCount(count + 1)}>
                Increment (+1)
              </button>
              <button onClick={() => setCount(count - 1)}>
                Decrement (-1)
              </button>
              <button onClick={() => setCount(0)}>Reset</button>
            </div>
          </div>
        )}

        <div className="info-section">
          <p>
            Current environment: {import.meta.env.VITE_MY_NAME || 'Development'}
          </p>
          <p>Theme: {theme}</p>
        </div>
      </header>
    </div>
  );
}

export default App;
