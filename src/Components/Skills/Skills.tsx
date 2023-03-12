import React from "react";
import { Tag } from "antd";

export type skillType = {
  name: string;
  iconLink?: string;
};

interface skillsProps {
  skills: skillType[];
}

export const Skills: React.FC<skillsProps> = ({ skills }) => {
  return (
    <>
      {skills.map((skill) => {
        return <Tag>{skill.name}</Tag>;
      })}
    </>
  );
};
