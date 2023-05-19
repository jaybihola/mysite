import React from "react";
import { Tag, Typography } from "antd";
import styled from "styled-components";
import { colors } from "../../../helpers";
const { Text } = Typography;

const { CheckableTag } = Tag;

export type skillType = {
  name: string;
  icon?: string;
};

const StyledTag = styled(Tag)`
  transition: 0.1s;
  margin-top: 4px;
  &:hover {
    //scale: 1.1;
    border: 1px solid ${colors.primary};
    color: ${colors.primary};
  }
`;

const StyledCheckableTag = styled(CheckableTag)`
  transition: 0.1s;
  margin-top: 4px;
  &:hover {
    //scale: 1.1;
    border: 1px solid ${colors.primary};
    color: ${colors.primary};
  }
  border: 1px solid
    ${(props) => (props.checked ? colors.primary : colors.lightGray)};
  background-color: ${(props) => (props.checked ? colors.primary : "")};
`;

interface skillsProps {
  skills: skillType[];
  selectedSkills?: string[];
  setSelectedSkills?: React.Dispatch<React.SetStateAction<string[]>>;
  selectable?: boolean | ((skills: string[]) => void);
}

export const Skills: React.FC<skillsProps> = ({
  skills,
  selectable,
  selectedSkills = [],
  setSelectedSkills = () => {},
}) => {
  const handleChange = (checked: boolean, skill: string) => {
    if (checked) {
      setSelectedSkills([...selectedSkills, skill]);
    } else {
      setSelectedSkills(selectedSkills.filter((s) => s !== skill));
    }
  };

  return (
    <>
      {!selectable &&
        skills.map((skill) => {
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
      {selectable &&
        skills.map((skill) => {
          return (
            <StyledCheckableTag
              checked={selectedSkills.includes(skill.name)}
              onChange={(checked) => handleChange(checked, skill.name)}
              key={skill.name}
            >
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
            </StyledCheckableTag>
          );
        })}
    </>
  );
};
