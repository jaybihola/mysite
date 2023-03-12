import React from "react";
import { Tag, Typography } from "antd";

const { Text } = Typography;

export type skillType = {
  name: string;
  icon?: string;
};

interface skillsProps {
  skills: skillType[];
}

export const Skills: React.FC<skillsProps> = ({ skills }) => {
  return (
    <>
      {skills.map((skill) => {
        return (
          <Tag key={skill.name}>
            {skill.icon ? (
              <img
                src={skill.icon}
                alt={skill.name}
                style={{
                  width: 15,
                  height: 15,
                  marginTop: 4,
                  marginRight: 4,
                }}
              />
            ) : null}
            <Text> {skill.name}</Text>
          </Tag>
        );
      })}
    </>
  );
};
