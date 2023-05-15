import React, { useState } from "react";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { ConfigProvider, Layout, theme } from "antd";
import { Footer } from "./Components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainContainer } from "./Pages/MainContainer/MainContainer";
import { colors } from "../helpers";
import { Experience } from "./Pages/Experience";

const { Content, Footer: AntdFooter, Header: AntdHeader } = Layout;

function App() {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          colorPrimary: colors.primary,
          colorSuccess: colors.success,
          colorWarning: colors.warning,
          colorError: colors.danger,
          colorText: colors.text,
          colorBgBase: colors.black,
          fontSize: 16,
        },
      }}
    >
      <Router>
        <Routes>
          <Route path={"/"} element={<MainContainer />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<div>projects</div>} />
            <Route path="experience" element={<Experience />} />
            <Route path="contact" element={<div>contact</div>} />
          </Route>
        </Routes>
      </Router>
    </ConfigProvider>
  );
}

export default App;
