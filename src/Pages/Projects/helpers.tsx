import React from "react";
import { Space, Typography } from "antd";
import { Skills } from "../../Components/Skills";
const { Title, Text } = Typography;

export const filterSkills = [
  {
    name: "React",
    icon: "https://img.icons8.com/plasticine/100/000000/react.png",
  },
  {
    name: "Typescript",
    icon: "https://img.icons8.com/color/100/000000/typescript.png",
  },
  {
    name: "Node.js",
    icon: "https://img.icons8.com/color/100/000000/nodejs.png",
  },
  {
    name: "Express",
    icon: "https://img.icons8.com/color/100/000000/express.png",
  },
  {
    name: "MongoDB",
    icon: "https://img.icons8.com/color/100/000000/mongodb.png",
  },
  {
    name: "PostgreSQL",
    icon: "https://img.icons8.com/color/100/000000/postgreesql.png",
  },
  {
    name: "Python",
    icon: "https://img.icons8.com/color/100/000000/python.png",
  },
  {
    name: "Flask",
    icon: "https://img.icons8.com/officel/100/000000/py.png",
  },
  {
    name: "Java",
    icon: "https://img.icons8.com/color/100/000000/java-coffee-cup-logo.png",
  },
  {
    name: "C/C++",
    icon: "https://img.icons8.com/color/100/000000/c-plus-plus-logo.png",
  },
];

export const entries = [
  {
    header: <Text strong>Breathe Free</Text>,
    cardContent: "",
    showModal: false,
    disabled: true,
    skills: ["React", "Typescript", "Node.js", "Express", "MongoDB"],
  },
  {
    header: <Text strong>ShareTrends</Text>,
    cardContent: "",
    showModal: false,
    disabled: true,
    skills: ["React", "Typescript", "Python", "Flask", "PostgreSQL"],
  },
  {
    header: <Text strong>Sigma Educate</Text>,
    cardContent: "",
    showModal: false,
    disabled: true,
    skills: ["React", "Typescript", "Python", "Flask", "PostgreSQL"],
  },
  {
    header: <Text strong>Java Cloud Database</Text>,
    cardContent: "",
    showModal: false,
    disabled: true,
    skills: ["Java"],
  },
  {
    header: <Text strong>Othello AI</Text>,
    cardContent: "",
    showModal: false,
    disabled: true,
    skills: ["Python"],
  },
  {
    header: <Text strong>ColourizeIt! - Image Colorizer</Text>,
    cardContent: "",
    showModal: false,
    disabled: true,
    skills: ["Python", "PyTorch"],
  },
  {
    header: <Text strong>Arduino LED Roulette</Text>,
    cardContent: "",
    showModal: false,
    disabled: true,
    skills: ["C/C++"],
  },
  {
    header: <Text strong>Personal Portfolio Website</Text>,
    cardContent: "",
    showModal: false,
    disabled: true,
    skills: ["React", "Typescript"],
  },
  {
    header: <Text strong>ARM Cave Runner Game</Text>,
    cardContent: "",
    showModal: false,
    disabled: true,
    skills: ["C/C++"],
  },
  {
    header: <Text strong>Simple ARM CPU</Text>,
    cardContent: "",
    showModal: false,
    disabled: true,
    skills: ["C/C++"],
  },
];
