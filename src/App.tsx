import { useState } from "react";
import { Home } from "./Pages/Home";
import { ConfigProvider, Space, theme } from "antd";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
      }}
    >
      <Home />
    </ConfigProvider>
  );
}

export default App;
