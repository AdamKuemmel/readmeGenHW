// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

inquirer.prompt;
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "what is your github username?",
    name: "github",
  },
  {
    type: "input",
    message: "what is your email address?",
    name: "email",
  },
  {
    type: "input",
    name: "title",
    message: "what is your projects name?",
  },
  {
    type: "input",
    name: "description",
    message: "Give a brief description of your project...",
  },
  {
    type: "list",
    name: "license",
    message: "what kind of license does your project use?",
    choices: ["MIT", "apache", "creative commons", "eclipse"],
  },
  {
    type: "input",
    name: "installation",
    message: "what commands should be run for dependencies?",
  },
  {
    type: "input",
    name: "test",
    message: "what commands should be run for tests?",
  },
  {
    type: "input",
    name: "contributer",
    message: "how does a user contribute to this project?",
  },
];
// inquirer.prompt(questions).then((data) => {
//   console.log(data); });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile("readME.md", data, (err) =>
    err ? console.log(err) : console.log("file was written!")
  );
}

// TODO: Create a function to initialize app
function init() {
  return inquirer.prompt(questions).then((data) => {
    writeToFile("readME.md", generateMarkdown(data));
  });
}

// Function call to initialize app
init();
