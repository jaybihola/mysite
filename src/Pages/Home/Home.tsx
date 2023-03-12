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
        <Space direction="horizontal">
          <div>
            <Title level={2}>Hey, I'm Jay Bihola</Title>
            <Title level={3}>
              I'm a software developer based out of Toronto
            </Title>
            <Space direction="vertical">
              <Text>I'm currently working at GoBolt as a developer.</Text>
              <Text>
                I am also actively teaching C++, Python, and JavaScript to
                students.
              </Text>
            </Space>
          </div>
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

        <Title level={4}>Socials</Title>
        <Text>
          Note, this is just a landing page as the site is still a work in
          progress. Check back later for more. In the meantime, check out my
          socials!
        </Text>
        <Socials socials={mySocials} />
      </Space>
    </HomeContainer>
  );
};
