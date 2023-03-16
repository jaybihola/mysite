// build footer component in react
import React from "react";
import { Space, Typography } from "antd";
import Icon, { HeartFilled, CoffeeOutlined } from "@ant-design/icons";

const { Text } = Typography;
// make the footer sticky to the bottom of the page
export const Footer: React.FC = () => {
  return (
    // apply style to make it stick to bottom
    <Space direction="vertical" style={{}}>
      <Text>
        Made with {<HeartFilled />} and {<CoffeeOutlined />}
      </Text>
    </Space>
  );
};
