

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
  } else if (license === 'Apache') {
    return '![License: Apache](https://img.shields.io/badge/License-Apache-blue.svg)';
  } else if (license === 'GPL') {
    return '![License: GPL](https://img.shields.io/badge/License-GPL-red.svg)';
  } else {
    return '';
  }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return 'https://opensource.org/licenses/MIT';
  } else if (license === 'Apache') {
    return 'https://opensource.org/licenses/Apache-2.0';
  } else if (license === 'GPL') {
    return 'https://www.gnu.org/licenses/gpl-3.0';
  } else {
    return '';
  }
}


// TODO: Create a function that returns the license section of README
function renderLicenseSection(license) {
  if (license === 'MIT') {
    return `
## License

This project is licensed under the [MIT](https://opensource.org/licenses/MIT) license.
    `;
  } else if (license === 'Apache') {
    return `
## License

This project is licensed under the [Apache License, Version 2.0](https://opensource.org/licenses/Apache-2.0).
    `;
  } else if (license === 'GPL') {
    return `
## License

This project is licensed under the [GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0.en.html).
    `;
  } else {
    return '';
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## License

  ${renderLicenseSection(data.license)}

  ## Contributing

  ${data.contributing}

  ## Tests

  ${data.tests}

  ## Questions

  If you have any questions, please feel free to contact me via email at ${data.email}. You can also find more of my work on [GitHub](https://github.com/${data.username}/).

  `;
}

module.exports = generateMarkdown;
