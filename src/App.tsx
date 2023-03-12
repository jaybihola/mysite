import { useState } from "react";
import { Home } from "./Pages/Home";
import { ConfigProvider, Space, theme } from "antd";
import styled from "styled-components";

const AppContainer = styled.div`
  margin-top: 10vh;
`;

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
