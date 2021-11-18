// ['None', 'MIT License', 'Appache License 2.0', 'Eclipse Public License 2.0', 'Mozilla Public License 2.0'],
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {}

function renderLicenseBadge(license) {
  switch (license) {
    case license = "None":
      badge = "";
    case license = "MIT License":
      badge = "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    case license = "Apache 2.0":
      badge = "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;
    case license = "Eclipse 1.0":
      badge = "![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
      break;
    case license = "Mozilla 2.0":
      badge = "![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
      break;
  }
    return badge; 
  }



// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None'){
    return '';
  }else{
    return `## License 

    This project is licensed under ${license} `
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  var title = data.title;
  var contents = data.contents;
  var description = data.description;
  var license = data.license;
  var usage = data.license;
  var install = data.install;
  var test = data.test;
  var contribute = data.contribute;
  var contributors = data.contributors;
  var email = data.email;
  var github = data.github;
  var links = data.links;

  return `# ${title}

  # Table of Contents
  ${contents}
  - [Description](#description)
  - [Install](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Tests](#tests)
  ${ renderLicenseBadge(license)}(#license)
  - [Questions](#questions)
  - [Links](#links)

  # Description
  ${description}

  # Installation
  ${install}

  # Usage
  ${usage}

  # Contribution
  ${contribute}
  ${contributors}

  # Tests
  ${test}

  # License
  ${ renderLicenseBadge(license)}

  # Questions
  ${github}
  ${email}

  # Links to Deployed Site
  ${links}

`
}

module.exports = generateMarkdown;
