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

export const filterDomains = [
  {
    name: "Web Development",
    icon: "https://img.icons8.com/color/100/000000/web.png",
  },
  {
    name: "Machine Learning",
    icon: "https://img.icons8.com/fluency/48/brain.png",
  },
  {
    name: "Cloud Computing",
    icon: "https://img.icons8.com/color/100/000000/cloud.png",
  },
  {
    name: "Computer Security",
    icon: "https://img.icons8.com/color/100/000000/lock.png",
  },
  {
    name: "Operating Systems",
    icon: "https://img.icons8.com/color/100/000000/operating-system.png",
  },
  {
    name: "Distributed Systems",
    icon: "https://img.icons8.com/color/100/000000/data-configuration.png",
  },
  {
    name: "Hardware",
    icon: "https://img.icons8.com/fluency/48/smartphone-cpu.png",
  },
];

export const entries = [
  {
    header: <Text strong>Breathe Free</Text>,
    date: {
      start: "2023-04-30",
      end: "present",
    },
    cardContent:
      "A web application that helps users relax and calm down. More details soon.",
    showModal: false,
    disabled: false,
    skills: [
      "React",
      "Typescript",
      "Node.js",
      "Express",
      "MongoDB",
      "Web Development",
    ],
  },
  {
    header: <Text strong>ShareTrends</Text>,
    date: {
      start: "2021-09-30",
      end: "2022-04-30",
    },
    cardContent:
      "An application that uses the state of the art artificial intelligence to try and predict the trend in the Dow Jones. The project achieved close to 50% accuracy, which is 2x as effective as the baseline predictions. ",
    showModal: false,
    disabled: false,
    skills: [
      "React",
      "Typescript",
      "Python",
      "Flask",
      "PostgreSQL",
      "Machine Learning",
      "Web Development",
    ],
  },
  {
    header: <Text strong>Sigma Educate</Text>,
    date: {
      start: "2021-09-30",
      end: "2022-12-20",
    },
    cardContent:
      "A web application that helps students at the University of Toronto plan their education better.",
    showModal: false,
    disabled: false,
    skills: [
      "React",
      "Typescript",
      "Python",
      "Flask",
      "PostgreSQL",
      "Web Development",
    ],
  },
  {
    header: <Text strong>Java Cloud Database</Text>,
    date: {
      start: "2022-01-14",
      end: "2022-04-30",
    },
    cardContent:
      "A distributed cloud database and key-value store written in Java. Acheiving extremely fast performance, eventual consistency, and fault tolerance. The system runs on multiple nodes to provide redundant and reliable access.",
    showModal: false,
    disabled: false,
    skills: ["Java", "Distribution Systems", "Cloud Computing"],
  },
  {
    header: <Text strong>Othello AI</Text>,
    cardContent:
      "An AI that plays Othello using the minimax algorithm, and almost always wins.",
    showModal: false,
    disabled: false,
    skills: ["Python"],
  },
  {
    header: <Text strong>ColourizeIt! - Image Colorizer</Text>,
    cardContent:
      "An artificial intelligence neural network CGAN that takes in a black and white image and outputs a colourized version of the image.",
    showModal: false,
    disabled: false,
    skills: ["Python", "PyTorch", "Machine Learning"],
  },
  {
    header: <Text strong>Arduino LED Roulette</Text>,
    cardContent:
      "A simple game on Arduino built with an LCD display, 30 LEDs, and a button. The game keep tracks of the user score, high score and displays it on the screen. There are multiple difficulties and gamemodes.",
    showModal: false,
    disabled: false,
    skills: ["C/C++", "Hardware"],
  },
  {
    header: <Text strong>Personal Portfolio Website</Text>,
    cardContent:
      "The website that you are on right now. The source code is available on my Github.",
    showModal: false,
    disabled: false,
    skills: ["React", "Typescript", "Web Development"],
  },
  {
    header: <Text strong>ARM Cave Runner Game</Text>,
    cardContent:
      "An endless cave-runner game built on an ARM CPU that is virtualized on the DE1-SOC FPGA board.",
    showModal: false,
    disabled: false,
    skills: ["C/C++", "Hardware"],
  },
  {
    header: <Text strong>Simple ARM CPU</Text>,
    cardContent:
      "A simple ARM CPU designed on the DE1-SOC FPGA board. It was built with its own set of ASSEMBLY instructions and can run simple programs.",
    showModal: false,
    disabled: false,
    skills: ["C/C++", "Hardware"],
  },
  {
    header: <Text strong>Web Project Management Tool</Text>,
    cardContent:
      "A kanban style project management tool with a user management system, organizations, invitations, custom columns and fields, and more.",
    showModal: false,
    disabled: false,
    skills: [
      "React",
      "Typescript",
      "Node.js",
      "Express",
      "MongoDB",
      "Web Development",
    ],
  },
  {
    header: <Text strong>OS161 - Command Line Operating System</Text>,
    cardContent:
      "A command line operating system built in C based off of OS161. The team implemented processes, threads, synchronization primitives, virtual memory, and file systems.",
    showModal: false,
    disabled: false,
    skills: ["C/C++", "Operating Systems"],
  },
  {
    header: <Text strong>TCP LAN Messaging Command Line Utility</Text>,
    cardContent:
      "A simple yet extensible command line utility built in C that allows users to send messages to each other over a local area network. The system features user authentication, group chats, and more.",
    showModal: false,
    disabled: false,
    skills: ["C/C++", "Networking", "Computer Security"],
  },
];
