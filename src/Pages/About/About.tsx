import react from "react";
import { Space, Typography } from "antd";
import React from "react";
import { AboutContainer, Highlighted } from "./styles";
import { Skills } from "../../Components/Skills";
import {
  frameworksSkills,
  programmingSkills,
  toolsSkills,
} from "../Home/helpers";
import { colors } from "../../../helpers";
import styled from "styled-components";
const { Title, Text } = Typography;

export const About = () => {
  return (
    <AboutContainer direction="vertical" size={"small"}>
      <Title level={1}>About Me</Title>
      <Text>
        I'm a <Highlighted>software developer</Highlighted> based out of Toronto
        and I have experience in a variety of domains. I am passionate about
        programming and I love to solve complex problems with unique solutions.
      </Text>

      <Text>
        I am currently working at <Highlighted>TripStack</Highlighted> as a Software Engineer II on the content team.
        I help ensure TripStack has <Highlighted>top notch integrations</Highlighted> with various airlines.
      </Text>

      <Text>
        I graduated from the <Highlighted>University of Toronto</Highlighted>{" "}
        in 2022 with a degree in Computer Engineering, specializing in Software
        Development. Furthermore, I have a double minor in artificial
        intelligence engineering and engineering business.
      </Text>

      <Text>
        I am currently seeking a full-time software developer position where I
        can apply my skills and continue to grow professionally. I am eager to
        work on challenging projects and collaborate with a team of driven
        individuals to contribute to the success of the organization.
      </Text>

      <Title
        level={4}
        style={{ color: `${colors.primary}`, marginTop: 16, marginBottom: 0 }}
      >
        Skills
      </Title>
      <Skills skills={programmingSkills} />
      <Skills skills={frameworksSkills} />
      <Skills skills={toolsSkills} />
    </AboutContainer>
  );
};
