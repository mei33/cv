import { Activity as ActivitySample } from "../types";
import { Chapter as ChapterSample } from "../types";

interface Chapter extends ChapterSample {
  activities: ActivitySample[];
}

// export const chapters: Array<{ title: string; activities: ActivitySample[] }> =
export const chapters: Chapter[] = [
  {
    activities: [
      {
        company: "VK.com, St. Petersburg, RU",
        description:
          "Brought out of the ‘legacy’ state codebase of my own department for the whole platform: hastened migration to JSX and Typescript, covered business logic with tests, refactored backend on the principles of modularity, clarity and lucidity. I reorganised the process of a code review inside the department: code delivering became faster, team obtained psychological comfort despite change requests for a clear and scalable code. I initiated new strict standards and agreements in code writing for the whole company and was an active participant of elaborating them. I like to be the first who can do things that were postponed by others and encourage others to do those things with me - refactoring old code, reconsidering existing practises, creating tools (especially on hackathons) that could help each other to do work more efficiently. Currently I am in charge of splitting a monolith in VK Classifieds (a project collaboration with youla.ru).",
        href: "//vk.com",
        period: "2020 - Present",
        skills: [
          "React",
          "TypeScript",
          "PHP",
          "KPHP",
          "Unit testing",
          "Storybook",
        ],
        position: "Senior frontend developer in the e-commerce department",
      },
      {
        company: "CSSSR.com, [remote]",
        description:
          "I wrote React code for web applications, which were involved in getting, processing and displaying data, which helped fintech companies to work effectively. I developed complex modular applications, which interacted with each other as libraries. I wrote a code myself and helped other teammates to do it. Also had a successful experience mentoring junior developers and students of our company's online course.",
        href: "//csssr.com/en",
        period: "2019 – 2020",
        skills: [
          "React",
          "TypeScript",
          "Flow",
          "GraphQL",
          "Unit testing",
          "Github Actions",
          "Storybook",
        ],
        position: "High middle frontend developer",
      },
      {
        company: "Sliday.com, [REMOTE]",
        description:
          "I created and supported the work of many NDA-projects from creating personal photobooks service to advertisement opportunities aggregator. With my frontend team I rewrote web- application from legacy-stack (jQuery + AngularJS) to Vue, which tracked working time of more than 800 thousands employees around the world and implemented a design system for it by myself. I created a mobile app for interacting with 250 thousand loyal buyers. I tracked and analysed dozens of UI/UX cases for thousands users in Google Analytics, Google Optimize and Google Tag Manager.",
        href: "//sliday.com/",
        period: "2020 - Present",
        skills: [
          "React (incl. Native)",
          "Flow",
          "Vue",
          "Ruby on Rails",
          "Unit testing",
          "Google Analytics",
          "MJML email",
        ],
        position: "Middle frontend developer",
      },
    ],
    icon: "briefcase",
    title: "Latest work experience",
  },
  {
    activities: [
      {
        company: "Skillbox.ru",
        description: "",
        href: "//skillbox.ru",
        period: "2021",
        skills: [],
        position: "UX design course",
      },
      {
        company: "Siberian federal university",
        description:
          "I got a degree as a marketer, represented my university at olympiads (including intercity) and took prizes. Beginning with the third year of education (2008) until 2013 I went from marketer assistance to a head of marketing department and finished my career in marketing.",
        href: "//www.sfu-kras.ru/en",
        period: "2005 – 2010",
        skills: [],
        position: "Bachelor's degree, marketing",
      },
    ],
    icon: "education",
    title: "Education",
  },
];
