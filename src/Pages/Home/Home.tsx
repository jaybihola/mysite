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
import styled from "styled-components";
import me from "../../Photos/me.jpeg";
import { Socials } from "../../Components/Socials";
import { colors } from "../../../helpers";

const { Title, Text } = Typography;

interface homeProps {}

const StyledImg = styled.img`
  border-radius: 100px;
  border: white solid 3px;

  transition: 0.2s;
  &:hover {
    border: ${colors.primary} solid 4px;
    scale: 1.2;
  }
`;

export const Home: React.FC<homeProps> = ({}) => {
  return (
    <HomeContainer>
      <Space direction="vertical">
        <Space direction="horizontal" wrap align="center">
          <Space direction="vertical" size={"small"} style={{ maxWidth: 500 }}>
            <Title level={5} style={{ color: `${colors.primary}` }}>
              Hey, I'm
            </Title>
            <Space
              direction={"vertical"}
              align={"center"}
              style={{ width: `100%` }}
            >
              <Title>Jay Bihola</Title>
            </Space>
            <Text>
              I create cool things with code and teach others how to do the
              same. Get in touch with me to learn more!
            </Text>
          </Space>
          <div
            style={{
              marginLeft: 30,
              marginTop: 10,
              alignContent: `center`,
              justifyContent: `center`,
            }}
          >
            <StyledImg src={me} />
          </div>
        </Space>

        <Title level={4}>Get in Touch</Title>
        <Socials socials={mySocials} />
      </Space>
    </HomeContainer>
  );
};
