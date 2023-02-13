// Updated code with added license functions

// Function to render the license badge
// Function to render the license badge
function renderLicenseBadge(license) {
    if (!license) {
        return "";
    }

    switch (license) {
        case "MIT":
            return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
        case "Apache 2.0":
            return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
        case "GPL v3":
            return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
        case "BSD 3":
            return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
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
    
    ## Description
    ${data.description}
    
    ## Table of Contents:
  - [Installation Instructions](#Installation-Instructions)
  - [Usage Information](#Usage-Information)
  - [Contribution Guidelines](#Contribution-Guidelines)
  - [Test Instructions](#Test-Instructions)
  - [License](#License)
  - [Questions](#Questions)
    
    ## Installation Instructions
    ${data.installation}

    ## Usage Information
    ${data.usage}

    ## Contribution Guidelines
    ${data.contributing}

    ## Test Instructions
    ${data.tests}

    ${renderLicenseSection(data.license)}
    
    ## Questions
    For any questions, please contact me at ${data.email}. You can also find me on GitHub at ${data.username}

}`
}

module.exports = generateMarkdown;
