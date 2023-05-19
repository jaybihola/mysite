import { Outlet, useNavigate } from "react-router-dom";
import { Alert, Layout, Menu } from "antd";
import React, { useEffect, useState } from "react";
import { menuItems } from "../../helpers";
import { MenuOutlined } from "@ant-design/icons";
import { Footer } from "../../Components/Footer";

const { Content, Footer: AntdFooter, Header: AntdHeader } = Layout;

export const MainContainer: React.FC = () => {
  const navigate = useNavigate();
  const [selectedKey, setSelectedKey] = useState<[string]>();
  const path = window.location.pathname;

  useEffect(() => {
    if (path === "/") setSelectedKey([""]);
    else setSelectedKey([path.slice(1)]);
  }, [path]);

  return (
    <>
      <Layout>
        <AntdHeader style={{ padding: 0 }}>
          <Menu
            items={menuItems}
            mode={"horizontal"}
            overflowedIndicator={<MenuOutlined />}
            selectedKeys={selectedKey}
            onClick={(e) => {
              if (e.key === "contact")
                window.location.replace("mailto:hello@jaybihola.com");
              else {
                setSelectedKey([e.key]);
                navigate(e.key);
              }
            }}
          />
        </AntdHeader>
        <Content>
          <Outlet />
        </Content>
        <AntdFooter style={{ textAlign: "center" }}>
          <Footer />
        </AntdFooter>
      </Layout>
    </>
  );
};
