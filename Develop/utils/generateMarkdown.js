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
    return "[![eclipse sheild](https://img.shields.io/badge/license-Eclipse-blue)](https://www.eclipse.org/legal/epl-2.0/)";
  } else if (license === "N/A") {
    return "![N/A sheild](https://img.shields.io/badge/license-N%2FA-red)";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//use similar if state ment as badge
function renderLicenseLink(license) {
  if (license === "MIT") {
    return " Click here for more info on licensing https://mit-license.org/";
  } else if (license === "apache") {
    return "Click here for more info on licensing https://apache.org/licenses/";
  } else if (license === "creative commons") {
    return "Click here for more info on licensing https://creativecommons.org/licenses/";
  } else if (license === "eclipse") {
    return "Click here for more info on licensing https://www.eclipse.org/legal/epl-2.0/";
  } else if (license === "N/A") {
    return "this project is not curently using any licensing";
  }
}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// // TODO: Create a function to generate markdown for README
// //how can i call this function
// //this will construct entire readme file
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
   
  ## Test
  
  ~~~
  ${data.test}
  ~~~

  ## Usage 
  ${data.usage}

  ## License
  ${renderLicenseLink(data.license)}
  
  ## Contribution
  ${data.contributer}
  

  ## Questions

  Have more questions? please reach out via message at one of these provdided links

  github.com/${data.github}
  
  ${data.email}



  
`;
}

module.exports = generateMarkdown;
