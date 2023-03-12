import React from "react";
import { Button, Space } from "antd";

export type socialType = {
  name: string;
  link: string;
  icon?: React.ReactNode | string;
};

interface SocialsProps {
  socials: socialType[];
}
export const Socials: React.FC<SocialsProps> = ({ socials }) => {
  return (
    <Space direction="horizontal">
      {socials.map((social) => {
        return (
          <Button href={social.link} rel="noreferrer" key={social.name}>
            {social.icon ? social.icon : null}
            {social.name}
          </Button>
        );
      })}
    </Space>
  );
};
