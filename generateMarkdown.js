// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if(license === "MIT"){
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    }
    else if(license === "Boost"){
      return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
    }
    else if(license === "CreativeCommons"){
      return `[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)`
    }
  else {
    return``
  }
  
  }
  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
    if(license === "Boost"){
      return `https://www.boost.org/LICENSE_1_0.txt`
    }
     else {
      return ``
    }
  }
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
    if(license === "CreativeCommons"){
      return `This Application is licensed by ${license}`
    }
    else {
      return``
    }
  
  }
  
  // TODO: Create a function to generate markdown for README
  function generateMarkdown(data) {
    return `# ${data.title}
  
  ${renderLicenseBadge(data.license)}
  
  ## Table of Contents
    1. [Decription](#description)
    2. [Installation](#installation)
    3. [Usage](#usage)
    4. [Contributions](#contributions)
    5. [Test](#test)
    6. [gitHubLink](#gitHubLink)
  
  
  ## Description
  ${data.description}
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## Contributions
  ${data.contributions}
  
  ## Test
  ${data.test}
  
  ## gitHubLink
  check out my gitHub at : http://github.com/${data.gitHubLink}
  
  `;
  }
  
  module.exports = generateMarkdown;
  