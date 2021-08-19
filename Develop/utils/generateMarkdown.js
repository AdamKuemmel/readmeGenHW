// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "[![MIT shield](https://img.shields.io/badge/license-MIT-brightgreen)](https://mit-license.org/)";
  } else if (license === "apache") {
    return "[![apache sheild](https://img.shields.io/badge/license-Apache-green)](https://apache.org/licenses/)";
  } else if (license === "creative commons") {
    return "[![creative commons sheild](https://img.shields.io/badge/license-CreativeCommons-yellowgreen)](https://creativecommons.org/licenses/)";
  } else if (license === "eclipse") {
    return "[![eclipse sheild](https://img.shields.io/badge/license-Eclipse-blue)]";
  } else if (license !== "N/A") {
    return "[![N/A sheild](https://img.shields.io/badge/license-N%2FA-red)](https://www.eclipse.org/legal/epl-2.0/)";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//use similar if state ment as badge
function renderLicenseLink(license) {
  if (license != "None") {
    return `## License Link
  this project is licensed with ${license}.`;
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
//how can i call this function
//this will construct entire readme file
function generateMarkdown(data) {
  return `
  # ${renderLicenseBadge(data.license)} ${data.title} 
  ## Description
  ${data.description}

  ## Table of Contents
  -[Installation](#installation)
  
  -[Usage](#usage)
  
  -[Contribution](#contribution)
  
  -[Test](#test)
  
  -[Questions](#Questions)
  
  ## Installation
  
  ~~~
  ${data.installation}
  ~~~
  
  ## Usage 
  ${data.usage}
  
  ## Contribution
  ${data.contributer}
  
  ## Test
  ${data.test}

  ## Questions
  ${data.github}
  
  ${data.email}



  
`;
}

module.exports = generateMarkdown;
