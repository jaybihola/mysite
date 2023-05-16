import React from "react";
import { Space, Typography } from "antd";
import gb from "../../Photos/gb.png";
import { Skills } from "../../Components/Skills";
const { Title, Text } = Typography;
export const panel = [
  {
    header: <Text strong>Full Stack Software Developer @ GoBolt</Text>,
    extra: <Text>May 2022 - May 2023</Text>,
    content: (
      <Space direction="vertical">
        <Space direction={"horizontal"} wrap>
          <img src={gb} alt="GoBolt" style={{ maxWidth: 200 }} />
          <Space direction={"vertical"}>
            <Text>
              Software Developer at
              <a href="https://www.gobolt.com/"> GoBolt</a> working on the
              merchant team. Responsible for multiple web applications and
              delivering a seamless experience to merchants.
            </Text>
            <Text>
              Implemented many features that facilitate GoBolt's next generation
              of logistics from pick and pack to transport.
            </Text>
          </Space>
        </Space>
        <Space
          direction={"vertical"}
          size={"small"}
          align={"start"}
          style={{ width: `100%` }}
        >
          <Title level={5}>Skills Used:</Title>
          <Skills
            skills={[
              {
                name: "Typescript",
                icon: "https://cdn.svgporn.com/logos/typescript-icon.svg",
              },
              { name: "Ruby", icon: "https://cdn.svgporn.com/logos/ruby.svg" },
              {
                name: "PostgreSQL",
                icon: "https://cdn.svgporn.com/logos/postgresql.svg",
              },
              {
                name: "React",
                icon: "https://cdn.svgporn.com/logos/react.svg",
              },
              {
                name: "Rails",
                icon: "https://cdn.svgporn.com/logos/rails.svg",
              },
            ]}
          />
        </Space>
      </Space>
    ),
    showModal: false,
    modalButtonText: "Details and Achievements",
    modalContent: (
      <Text>
        Software Engineer at{" "}
        <a href="https://www.athenahealth.com/">athenahealth</a> working on the{" "}
        <a href="https://www.athenahealth.com/products/athenaone">athenaOne</a>{" "}
        platform.
      </Text>
    ),
  },
  {
    header: <Text strong>Software Developer Intern @ Husky</Text>,
    extra: <Text>May 2020 - Aug 2021</Text>,
    content: (
      <Space direction="vertical">
        <Space direction={"horizontal"} wrap>
          <img
            src={"https://www.husky.co/globalassets/huskylogo-red.svg"}
            alt="Husky"
            style={{ width: `100%`, maxWidth: 250 }}
          />
          <Space direction={"vertical"}>
            <Text>
              Software Designer, Developer at
              <a href="https://www.husky.co/">
                {" "}
                Husky Injection Molding Systems{" "}
              </a>
              working on the machine software team. Responsible for implementing
              functionality to software that runs on Husky machines.
            </Text>
            <Text>
              Implemented user facing features like user roles and permissions
              which directly yielded additional revenue for Husky.
            </Text>
            <Text>
              Implemented several internal tools and features to assist with
              development of the Husky HMI (human machine interface).
            </Text>
          </Space>
        </Space>
        <Space
          direction={"vertical"}
          size={"small"}
          align={"start"}
          style={{ width: `100%` }}
        >
          <Title level={5}>Skills Used:</Title>
          <Skills
            skills={[
              {
                name: "C#",
                icon: "https://cdn.svgporn.com/logos/c-sharp.svg",
              },
              { name: "Ruby", icon: "https://cdn.svgporn.com/logos/ruby.svg" },
              {
                name: "PostgreSQL",
                icon: "https://cdn.svgporn.com/logos/postgresql.svg",
              },
              {
                name: ".Net",
                icon: "https://cdn.svgporn.com/logos/dotnet.svg",
              },
            ]}
          />
        </Space>
      </Space>
    ),
    showModal: false,
    modalButtonText: "Learn More",
    modalContent: <Text></Text>,
  },
  {
    header: (
      <Text strong>Lead Programming Instructor (part-time) @ Exceed</Text>
    ),
    extra: <Text>2018 - Now</Text>,
    content: (
      <Space direction="vertical">
        <Space direction={"horizontal"} wrap>
          <Space direction={"vertical"}>
            <Text>
              Lead Programming Instructor at
              <a href="https://www.exceedrobotics.com/">
                {" "}
                Exceed Robotics Mississauga
              </a>
              . Responsible for providing a high quality education to over 200
              students. As the lead instructor, I am responsible for managing
              and training a team of several instructors.
            </Text>
            <Text>
              Developed a long term curriculum for students to learn the
              fundamentals of programming in multiple languages like C++,
              Python, and JavaScript, as well as the fundamentals of robotics.
            </Text>
            <Text>
              Lead for the student workshop, where graduates develop their own
              projects and games. As a result of the workshop program, 10+ new
              robots have been created, many of which, are used at Exceed for
              teaching.
            </Text>
          </Space>
        </Space>
        <Space
          direction={"vertical"}
          size={"small"}
          align={"start"}
          style={{ width: `100%` }}
        >
          <Title level={5}>Skills Used:</Title>
          <Skills
            skills={[
              {
                name: "C++",
                icon: "https://cdn.svgporn.com/logos/c-plusplus.svg",
              },
              {
                name: "Python",
                icon: "https://cdn.svgporn.com/logos/python.svg",
              },
              {
                name: "JavaScript",
                icon: "https://cdn.svgporn.com/logos/javascript.svg",
              },
              {
                name: "VEX",
              },
              {
                name: "Arduino",
                icon: "https://cdn.svgporn.com/logos/arduino.svg",
              },
              {
                name: "PyGame",
                icon: "https://cdn.svgporn.com/logos/pyscript.svg",
              },
            ]}
          />
        </Space>
      </Space>
    ),
    showModal: true,
    modalButtonText: "Learn More",
    modalTitle: "Exceed Robotics",
    modalContent: (
      <Space direction={"vertical"}>
        <Text>
          Exceed Robotics is involved in providing world-class education to
          students aged 8-18. As the lead instructor at Exceed, I am responsible
          for many aspects of the curriculum and teaching. I have been involved
          in the development of:
        </Text>
        <ul>
          <li>VEX Robotics Competition Course Development</li>
          <li>Python Course Development</li>
          <li>Arduino Course Development</li>
        </ul>
        In addition to teaching the above courses, I am also responsible for
        managing and training a team of several instructors, many of whom are
        just starting out in the field of education.
      </Space>
    ),
  },
];
