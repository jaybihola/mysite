import { useState } from "react";
import { Home } from "./Pages/Home";
import { ConfigProvider, Layout, theme } from "antd";
import styled from "styled-components";
import { Footer } from "./Components/Footer";

const { Content, Footer: AntdFooter } = Layout;

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
      <Layout>
        <Content style={{ padding: `0 10px` }}>
          <Home />
        </Content>
        <AntdFooter style={{ textAlign: "center" }}>
          <Footer />
        </AntdFooter>
      </Layout>
    </ConfigProvider>
  );
}

export default App;
