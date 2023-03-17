import React from "react";
import { Space, Typography } from "antd";
import { Skills, skillType } from "../../Components/Skills";
import {
  programmingSkills,
  frameworksSkills,
  toolsSkills,
  mySocials,
} from "./helpers";
import { HomeContainer } from "./styles";

// import the image me.jpeg
import me from "../../Photos/me.jpeg";
import { Socials } from "../../Components/Socials";

const { Title, Text } = Typography;

interface homeProps {}

export const Home: React.FC<homeProps> = ({}) => {
  return (
    <HomeContainer>
      <Space direction="vertical">
        <Space direction="horizontal" wrap align="center">
          <Space direction="vertical" size={"small"}>
            <Title level={2}>Hey, I'm Jay Bihola</Title>
            <Title level={3}>
              I'm a software developer based out of Toronto
            </Title>
            <Space direction="vertical">
              <Text>
                I'm currently working at GoBolt as a full stack developer on the
                merchant team.
              </Text>
              <Text>
                I am also actively teaching C++, Python, and JavaScript to
                students. I have taught over 100 students in the past 3 years.
              </Text>
            </Space>
          </Space>
          <div style={{ marginLeft: 30 }}>
            <img
              src={me}
              style={{ borderRadius: 100, border: "white solid 2px" }}
            />
          </div>
        </Space>

        <Title level={4}>Skills</Title>
        <Skills skills={programmingSkills} />
        <Skills skills={frameworksSkills} />
        <Skills skills={toolsSkills} />

        <Title level={4}>Social</Title>
        <Socials socials={mySocials} />
      </Space>
    </HomeContainer>
  );
};
