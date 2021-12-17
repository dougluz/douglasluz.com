import { Heading } from "@chakra-ui/layout"
import { Section } from "../components/section"
import { Work } from "../components/work"

const experiences = [
  {
    company: "ZRP",
    position: "Full-stack Junior",
    date: "nov 2020 - currently",
    technologies: [
      "React",
      "Vue",
      "Node",
      "MongoDB",
      "Postgres",
      "Styled Components",
      "GraphQL",
      "Jest"
    ],
    activities: [
      "Development of a PDR to test the existing design system and component library in a white label application.",
      "Development of a discount coupon feature in a web application, enabling the administrator to create and limit coupons and users to apply the coupon to the basket;",
      "Updating Enzyme tests to React Testing Library;",
      "Enhancements in the investor application in a fintech, allowing the investor to have a better experience with new screens and graphics;",
      "Work in collaboration with the design team by providing suggestions and ideas for developing the new design system;",
      "Enhancements to current Component Library;",
      "Writing GraphQL queries to Web applications with a Node backend with the MongoDB database;",
      "Developing new functionalities in microservices, Vue and React applications;",
      "Working with scrum;",
      "Code Review;",
      "Working on an app with React Native and Elixir to allow the ZRP employees to keep up to date with their career path and ZRPoints (a score that is earned participating in internal programs);",
      "Refactor of Coffescript screens to React in a Ruby on Rails web app;",
      "Development of web applications; ",
      "Bug Repair and Maintenance."
    ]
  },
  {
    company: "Tranorte Sistemas Mecanizados Ltda.",
    position: "IT Assistant",
    date: "may 2018 - nov 2020",
    technologies: ["Vue", "Node", "Postgres"],
    activities: [
      "Development of a platform for HR to register and share new jobs opportunities in the company and receive candidates curriculum (about 400 unique candidates in a year).",
      "Development of a web application to allow to all employees get information like e-mail, Whatsapp, and Skype user to enter in contact with other employees;",
      "Development of a Node.js application that reads a sheet and alerts HR and IT department about employees that are going or returning on vacations in the current week;",
      "Remote and presential IT support;",
      "Servers maintenance;",
      "Software and Hardware maintenance;",
      "Constant talk with the directory about new technologies presenting how they can use them to improve internal processes."
    ]
  },
  {
    company: "UNC Universidade do Contestado",
    position: "Javascript Instructor (Intern)",
    date: "mar 2018 - jun 2018",
    technologies: ["Javascript", "HTML", "CSS"],
    activities: [
      "Conduct a Javascript course for university computer science students;",
      "40 hours of classes covering variables, arrays, DOM manipulation, classes, and functions;",
      "Support to all the students throughout the course;;",
      "Applying exercises and demonstrating how to use Javascript to web development;",
      "ES6 Javascript;",
      "Enhancing my communication skills."
    ]
  }
]

const Works = () => (
  <Section>
    <Heading as="h1" size="2xl" variant="page-title" textAlign="center" mb={10}>
      Works
    </Heading>
    {experiences.map((experience) => (
      <Work key={experiences.company} {...experience} />
    ))}
  </Section>
)

export default Works
