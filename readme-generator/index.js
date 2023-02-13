const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown");

const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Please provide a description of your project."
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide the installation instructions."
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide usage information for your project."
    },
    {
        type: "input",
        name: "contributing",
        message: "Please provide contribution guidelines."
    },
    {
        type: "input",
        name: "tests",
        message: "Please provide test instructions."
    },
    {
        type: "list",
        name: "license",
        message: "Please select a license for your project.",
        choices: [
            "MIT",
            "Apache 2.0",
            "GPL v3",
            "BSD 3"
        ]
    }
];

inquirer.prompt(questions)
    .then(function (data) {
        const readme = generateMarkdown(data);
        console.log(readme);
    });
