// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
function generateReadme(data) {
    return `
# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
[![License](https://img.shields.io/badge/License-${data.license}-blue.svg)](LICENSE)
${data.licenseInfo}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For additional questions, contact ${data.name} via:
- GitHub: [${data.username}](https://github.com/${data.username})
- Email: [${data.email}](mailto:${data.email})
    `;
}


inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter the name of your project:',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a brief description of your project:',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Enter installation instructions:',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter usage information:',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose a license for your application:',
            choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'None'],
        },
        {
            type: 'input',
            name: 'licenseInfo',
            message: 'Provide additional information about the license:',
            when: (answers) => answers.license !== 'None',
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Enter contributing guidelines:',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Enter test instructions:',
        },
        {
            type: 'input',
            name: 'name',
            message: 'Enter your full name:',
        },
        {
            type: 'input',
            name: 'username',
            message: 'Enter your GitHub username:',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address:',
        },
    ])
    .then((answers) => {
        // Generate README content
        const readmeContent = generateReadme(answers);
        fs.writeFileSync('README.md', readmeContent, 'utf-8');

        console.log('README.md generated successfully!');
    })
    .catch((error) => console.error(error));

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
