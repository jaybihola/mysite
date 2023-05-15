import React from "react";
import { Tag, Typography } from "antd";
import styled from "styled-components";
import { colors } from "../../../helpers";
const { Text } = Typography;

export type skillType = {
  name: string;
  icon?: string;
};

const StyledTag = styled(Tag)`
  transition: 0.1s;
  &:hover {
    //scale: 1.1;
    border: 1px solid ${colors.primary};
    color: ${colors.primary};
  }
`;

interface skillsProps {
  skills: skillType[];
}

export const Skills: React.FC<skillsProps> = ({ skills }) => {
  return (
    <>
      {skills.map((skill) => {
        return (
          <StyledTag key={skill.name}>
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
          </StyledTag>
        );
      })}
    </>
  );
};
