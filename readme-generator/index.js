const fs = require("fs");
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

let readme = "";

const addLine = (line) => {
    readme += line + "\n";
};

const promptForTitle = () => {
    console.log("Enter the title for your README file:");
    readline.prompt();

    readline.on("line", (input) => {
        addLine(`# ${input}`);
        promptForDescription();
    });
};

const promptForDescription = () => {
    console.log(
        "Enter a description for your project (press CTRL + D when finished):"
    );
    readline.prompt();

    readline.on("line", (input) => {
        addLine(input);
        readline.prompt();
    });

    readline.on("close", () => {
        addLine("");
        promptForTableOfContents();
    });
};

const promptForTableOfContents = () => {
    console.log(
        "Enter the table of contents for your README (press CTRL + D when finished, leave empty to skip):"
    );
    readline.prompt();

    let tableOfContents = "";

    readline.on("line", (input) => {
        if (input) {
            tableOfContents += `- ${input}\n`;
        }
        readline.prompt();
    });

    readline.on("close", () => {
        if (tableOfContents) {
            addLine("## Table of Contents\n");
            addLine(tableOfContents);
        }
        promptForInstallation();
    });
};

const promptForInstallation = () => {
    console.log(
        "Enter the installation instructions for your project (press CTRL + D when finished, leave empty to skip):"
    );
    readline.prompt();

    let installation = "";

    readline.on("line", (input) => {
        if (input) {
            installation += `${input}\n`;
        }
        readline.prompt();
    });

    readline.on("close", () => {
        if (installation) {
            addLine("## Installation\n");
            addLine(installation);
        }
        promptForUsage();
    });
};

const promptForUsage = () => {
    console.log(
        "Enter the usage information for your project (press CTRL + D when finished, leave empty to skip):"
    );
    readline.prompt();

    let usage = "";

    readline.on("line", (input) => {
        if (input) {
            usage += `${input}\n`;
        }
        readline.prompt();
    });

    readline.on("close", () => {
        if (usage) {
            addLine("## Usage\n");
            addLine(usage);
        }
        promptForLicense();
    });
};

const promptForLicense = () => {
    console.log(
        "Enter the license information for your project (press CTRL + D when finished, leave empty to skip):"
    );
    readline.prompt();

    let license = "";

    readline.on("line", (input) => {
        if (input) {
            license += `${input}\n`;
        }
        readline.prompt();
    });

    readline.on("close", () => {
        if (license) {
            addLine("## License\n");
            addLine(license);
        }
        promptForContribution();
    });
};

const promptForContribution = () => {
    console.log(
        "Enter the contribution guidelines for your project (press CTRL + D when finished, leave empty to skip):"
    );
    readline.prompt();

    let contribution = "";

    readline.on("line", (input) => {
        if (input) {
            contribution += `${input}\n`;
        }
        readline.prompt();
    });

    readline.on("close", () => {
        if (contribution) {
            addLine("## Contributions\n");
            addLine(contribution);
        }
        promptForTests();
    });
};

const promptForTests = () => {
    console.log(
        "Enter the test instructions for your project (press CTRL + D when finished, leave empty to skip):"
    );
    readline.prompt();

    let tests = "";

    readline.on("line", (input) => {
        if (input) {
            tests += `${input}\n`;
        }
        readline.prompt();
    });

    readline.on("close", () => {
        if (tests) {
            addLine("## Tests\n");
            addLine(tests);
        }
        writeToFile();
    });
};

const writeToFile = () => {
    fs.writeFile("README.md", readme, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log("README.md was generated successfully!");
        }
    });
};

promptForTitle();
