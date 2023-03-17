import { useState } from "react";
import { Home } from "./Pages/Home";
import { ConfigProvider, Layout, theme, Alert, Menu } from "antd";
import styled from "styled-components";
import { Footer } from "./Components/Footer";
import { menuItems } from "./helpers";

const { Content, Footer: AntdFooter, Header: AntdHeader } = Layout;

function App() {
  const [count, setCount] = useState(0);
  const showMenu = false;
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
      }}
    >
      <Layout>
        <Alert
          message="This site is still under construction. I am updating it frequently so please check back later for more!"
          type="warning"
          showIcon
          closable
        />
        {showMenu && (
          <AntdHeader>
            <Menu items={menuItems} mode={"horizontal"} theme="dark" />
          </AntdHeader>
        )}
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
