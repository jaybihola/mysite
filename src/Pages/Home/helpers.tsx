import React from "react";
import { skillType } from "../../Components/Skills";
import { socialType } from "../../Components/Socials";
import {
  LinkedinOutlined,
  GithubOutlined,
  MailOutlined,
  PaperClipOutlined,
} from "@ant-design/icons";

export const programmingSkills: skillType[] = [
  {
    name: "Typescript",
    icon: "https://cdn.svgporn.com/logos/typescript-icon.svg",
  },
  { name: "Ruby", icon: "https://cdn.svgporn.com/logos/ruby.svg" },
  { name: "PostgreSQL", icon: "https://cdn.svgporn.com/logos/postgresql.svg" },
  { name: "Python", icon: "https://cdn.svgporn.com/logos/python.svg" },
  { name: "C++", icon: "https://cdn.svgporn.com/logos/c-plusplus.svg" },
];

export const frameworksSkills: skillType[] = [
  { name: "React", icon: "https://cdn.svgporn.com/logos/react.svg" },
  { name: "Rails", icon: "https://cdn.svgporn.com/logos/rails.svg" },
  { name: "Django", icon: "https://cdn.svgporn.com/logos/django.svg" },
  { name: "PyTorch", icon: "https://cdn.svgporn.com/logos/python.svg" },
  { name: "Arduino", icon: "https://cdn.svgporn.com/logos/arduino.svg" },
];

export const toolsSkills: skillType[] = [
  { name: "Git", icon: "https://cdn.svgporn.com/logos/git-icon.svg" },
  { name: "Docker", icon: "https://cdn.svgporn.com/logos/docker-icon.svg" },
  { name: "Webpack", icon: "https://cdn.svgporn.com/logos/webpack.svg" },
  { name: "Bash/ZSH", icon: "https://cdn.svgporn.com/logos/bash.svg" },
];

export const mySocials: socialType[] = [
  {
    name: "Email Me",
    link: "mailto:hello@jaybihola.com",
    icon: <MailOutlined />,
  },
  {
    name: "Github",
    link: "https://www.github.com/jaybihola",
    icon: <GithubOutlined />,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/jaybihola",
    icon: <LinkedinOutlined />,
  },
  {
    name: "My Resume",
    link: "https://l.biho.la/resume",
    icon: <PaperClipOutlined />,
  },
];
