import React, { useState } from "react";
import { Home } from "./Pages/Home";
import { ConfigProvider, Layout, theme, Alert, Menu } from "antd";
import styled from "styled-components";
import { Footer } from "./Components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainContainer } from "./Pages/MainContainer/MainContainer";

const { Content, Footer: AntdFooter, Header: AntdHeader } = Layout;

function App() {
  const [count, setCount] = useState(0);
  const showMenu = true;
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
      }}
    >
      <Layout>
        <Router>
          <Routes>
            <Route path={"/"} element={<MainContainer />}>
              <Route
                index
                element={
                  <Content style={{ padding: `0 10px` }}>
                    <Home />
                  </Content>
                }
              />
              <Route path="about" element={<div>about</div>} />
              <Route path="projects" element={<div>projects</div>} />
              <Route path="contact" element={<div>contact</div>} />
            </Route>
          </Routes>
        </Router>

        <AntdFooter style={{ textAlign: "center" }}>
          <Footer />
        </AntdFooter>
      </Layout>
    </ConfigProvider>
  );
}

export default App;
