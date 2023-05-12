import { Outlet, useNavigate } from "react-router-dom";
import { Alert, Layout, Menu } from "antd";
import React from "react";
import { menuItems } from "../../helpers";

const { Content, Footer: AntdFooter, Header: AntdHeader } = Layout;

export const MainContainer: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <Alert
        message="This site is still under construction. I am updating it frequently so please check back later for more!"
        type="warning"
        showIcon
        closable
      />
      <AntdHeader>
        <Menu
          items={menuItems}
          mode={"horizontal"}
          theme="dark"
          defaultSelectedKeys={[""]}
          onClick={(e) => {
            navigate(e.key);
          }}
        />
      </AntdHeader>
      <Outlet />
    </>
  );
};
