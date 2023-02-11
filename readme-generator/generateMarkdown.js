// Updated code with added license functions

// Function to render the license badge
function renderLicenseBadge(license) {
    if (!license) {
        return "";
    }

    switch (license) {
        case "MIT":
            return "License: MIT";
        case "Apache 2.0":
            return "License";
        case "GPL v3":
            return "License: GPL v3";
        case "BSD 3":
            return "License";
        default:
            return "";
    }
}

// Function to render the license link
function renderLicenseLink(license) {
    if (!license) {
        return "";
    }

    switch (license) {
        case "MIT":
            return "https://opensource.org/licenses/MIT";
        case "Apache 2.0":
            return "https://opensource.org/licenses/Apache-2.0";
        case "GPL v3":
            return "https://www.gnu.org/licenses/gpl-3.0";
        case "BSD 3":
            return "https://opensource.org/licenses/BSD-3-Clause";
        default:
            return "";
    }
}

// Function to render the license section of README
function renderLicenseSection(license) {
    if (!license) {
        return "";
    }

    return `## License
    
    This project is licensed under the ${license} license.
    
    ${renderLicenseBadge(license)}`;
}

// Function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
    
    ${renderLicenseBadge(data.license)}
    
    Description
    ${data.description}
    
    Table of Contents
    Installation
    Usage
    Contributing
    Tests
    License
    Questions
    Installation
    ${data.installation}
    
    Usage
    ${data.usage}
    
    Contributing
    ${data.contributing}
    
    Tests
    ${data.tests}
    
    ${renderLicenseSection(data.license)}
    
    Questions
    For any questions, feel free to reach out to me at ${
        data.email
    }. You can also find me on Github at [${data.github}
    
    
    
    
](https://github.com/${data.github}).
`;
}

module.exports = generateMarkdown;
