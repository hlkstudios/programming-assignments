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

function renderLicenseSection(license, licenseLink) {
    return `## License
    
    This project is licensed under the ${license} license.
    
    You can find the license information at the following link: ${licenseLink}`;
}

function generateMarkdown(answers) {
    const {
        title,
        description,
        installation,
        usage,
        contribution,
        tests,
        email,
        github,
        license,
        licenseLink,
    } = answers;

    return `# ${title}
    ${renderLicenseBadge(license)}

    Description
    ${description}
    
    Table of Contents:
  - [Installation Instructions](#Installation-Instructions)
  - [Usage Information](#Usage-Information)
  - [Contribution Guidelines](#Contribution-Guidelines)
  - [Test Instructions](#Test-Instructions)
  - [License](#License)
  - [Questions](#Questions)
    

    Installation
    ${installation}
    
    Usage
    ${usage}
    
    Contribution
    ${contribution}
    
    Tests
    ${tests}
    
    Support
    If you have any questions, feel free to reach out to me at ${email}.
    
    You can also find me on Github at ${github}.
    
    ${renderLicenseSection(license, licenseLink)}`;
}

module.exports = generateMarkdown;

// connect to mongodb

