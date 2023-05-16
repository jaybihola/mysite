import React from "react";
import { CardModalList } from "../../Components/CardModalList";
import { Typography } from "antd";
import * as S from "./styles";
import { entries } from "./helpers";

const { Title } = Typography;

export const Projects: React.FC = () => {
  return (
    <S.ProjectsContainer direction={"vertical"}>
      <Title>Projects</Title>
      <CardModalList entries={entries} />
    </S.ProjectsContainer>
  );
};
