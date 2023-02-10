const inquirer = require("inquirer");
const fs = require("fs");

let readme = "";

const addLine = (line) => {
    readme += `${line}\n`;
};

const promptForTitle = () =>{
    inquirer
    .prompt([
        {
            type: "input",
            name: "Title",
            message: "Enter the Title: "
        },
    ])
    .then((answers) => {
            addLine(`#${answers.title}\n`);
            promptForDescription();
    })
};

const promptForDescription = () => {
    inquirer
        .prompt([
            {
                type: "input",
                name: "description",
                message: "Enter a description for your project:",
            },
        ])
        .then((answers) => {
            addLine(`# ${answers.description}\n`);
            promptForTableOfContents();
        });
};

const promptForTableOfContents = () => {
    inquirer
        .prompt([
            {
                type: "checkbox",
                name: "tableOfContents",
                message:
                    "Select the sections you want to include in your README:",
                choices: [
                    "Installation",
                    "Usage",
                    "License",
                    "Contributions",
                    "Tests",
                    "Media",
                ],
            },
        ])
        .then((answers) => {
            if (answers.tableOfContents.length) {
                addLine("## Table of Contents\n");
                answers.tableOfContents.forEach((section) => {
                    addLine(`- [${section}](#${section.toLowerCase()})`);
                });
                addLine("\n");
            }
            promptForInstallation();
        });
};

const promptForInstallation = () => {
    inquirer
        .prompt([
            {
                type: "input",
                name: "installation",
                message:
                    "Enter the installation instructions for your project:",
            },
        ])
        .then((answers) => {
            if (answers.installation) {
                addLine("## Installation\n");
                addLine(`${answers.installation}\n`);
            }
            promptForUsage();
        });
};

const promptForUsage = () => {
    inquirer
        .prompt([
            {
                type: "input",
                name: "usage",
                message: "Enter the usage information for your project:",
            },
        ])
        .then((answers) => {
            if (answers.usage) {
                addLine("## Usage\n");
                addLine(`${answers.usage}\n`);
            }
            promptForLicense();
        });
};

const promptForLicense = () => {
    inquirer
        .prompt([
            {
                type: "input",
                name: "license",
                message: "Enter the license information for your project:",
            },
        ])
        .then((answers) => {
            if (answers.license) {
                addLine("## License\n");
                addLine(`${answers.license}\n`);
            }
            promptForContribution();
        });
};

const promptForContribution = () => {
    inquirer
        .prompt([
            {
                type: "input",
                name: "contributions",
                message: "Enter the contribution guidelines for your project:",
            },
        ])
        .then((answers) => {
            if (answers.contributions) {
                addLine("## Contributions\n");
                addLine("${answers.contributions}\n");
            }
            promptForTests();
        });
};

const promptForTests = () => {
    inquirer
        .prompt([
            {
                type: "input",
                name: "tests",
                message: "Enter the test instructions for your project:",
            },
        ])
        .then((answers) => {
            if (answers.tests) {
                addLine("## Tests\n");
                addLine("${answers.tests}\n");
            }
            promptForMedia();
        });
};

const promptForMedia = () => {
    inquirer
        .prompt([
            {
                type: "input",
                name: "media",
                message:
                    "Enter the file paths of any media you'd like to include in your README (separated by a comma):",
            },
        ])
        .then((answers) => {
            if (answers.media) {
                const media = answers.media.split(",");
                if (media.length) {
                    addLine("## Media\n");
                    media.forEach((file) => {
                        if (
                            file.endsWith(".png") ||
                            file.endsWith(".jpg") ||
                            file.endsWith(".jpeg")
                        ) {
                            addLine(![image]("${file.trim()}"));
                        } else if (
                            file.endsWith(".mp4") ||
                            file.endsWith(".gif")
                        ) {
                            addLine(
                                <video
                                    src="${file.trim()}"
                                    width="320"
                                    height="240"
                                    controls
                                ></video>
                            );
                        }
                    });
                    addLine("\n");
                }
            }
            writeReadme();
        });
};

const writeReadme = () => {
    fs.writeFile("README.md", readme, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log("README.md successfully generated!");
        }
    });
};

promptForTitle();
