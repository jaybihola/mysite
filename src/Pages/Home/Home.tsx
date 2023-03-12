import React from "react";
import { Space, Typography } from "antd";
import { Skills, skillType } from "../../Components/Skills";
import { programmingSkills, frameworksSkills, toolsSkills } from "./helpers";
import { HomeContainer } from "./styles";

const { Title, Text } = Typography;

interface homeProps {}

export const Home: React.FC<homeProps> = ({}) => {
  return (
    <HomeContainer>
      <Space direction="vertical">
        <Title level={2}>Hey, I'm Jay</Title>
        <Title level={3}>I'm a software developer based out of Toronto</Title>
        <Text>I'm currently working at GoBolt as a developer.</Text>

        <Title level={4}>Skills</Title>
        <Skills skills={programmingSkills} />
        <Skills skills={frameworksSkills} />
        <Skills skills={toolsSkills} />

        <Title level={4}>Socials</Title>
        <Text>
          Note, this site is still a work in progress. Check back later for
          more. In the meantime, check out my socials
        </Text>
      </Space>
    </HomeContainer>
  );
};
