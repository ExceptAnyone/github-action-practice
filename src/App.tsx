import { useState, useEffect } from "react";
import "./App.css";

interface AppProps {
  title?: string;
  showCounter?: boolean;
  initialCount?: number;
  theme?: "light" | "dark";
}

function App({
  title = "React + Storybook",
  showCounter = true,
  initialCount = 0,
  theme = "light",
}: AppProps) {
  const [count, setCount] = useState(initialCount);

  // 앱 버전 정보를 개발자 도구에 출력
  useEffect(() => {
    console.info("🚀 App Version:", __APP_VERSION__);
    console.info("📅 Build Time:", __BUILD_TIME__);
    console.info("🔧 Environment:", import.meta.env.MODE);
    console.info("🌐 Current URL:", window.location.href);
  }, []);

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
            Current environment: {import.meta.env.VITE_MY_NAME || "Development"}
          </p>
          <p>Theme: {theme}</p>
          <p className="version-info">
            <strong>App Version:</strong> {__APP_VERSION__}
          </p>
          <p className="build-info">
            <strong>Build Time:</strong>{" "}
            {new Date(__BUILD_TIME__).toLocaleString()}
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
