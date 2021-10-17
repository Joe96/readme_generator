const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([
    {
        type: 'input',
        message: 'What is your name?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is the name of your Github repository?',
        name: 'repoName',
    },
    {
        type: 'input',
        message: 'Describe your project?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the installation instructions?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Usage Information?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Contribution Guidelines?',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'Testing Instructions?',
        name: 'testing',
    },
    {
        type: 'list',
        message: 'Choose a Licence',
        name: 'license',
        choices: ["MIT License", "BSD 2-Clause License"]
    },
    {
        type: 'input',
        message: 'What is your Git36',
        name: 'userGithub',
    },
    {
        type: 'input',
        message: 'Do you have Github profile you would like to share?',
        name: 'userEmail',
    },
]).then (function (readmeQuestions) {
    console.log(readmeQuestions)

    var readme=`# ${readmeQuestions.repoName} 

    ## Description
    ${readmeQuestions.description}
    
    ## Table of Contents 
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contribution](#contribution)
    - [Test](#test)
    - [Questions](#questions)
    
    ## Installation Instructions
    ${readmeQuestions.install}
    
    ## Usage
    ${readmeQuestions.usage}
    
    ## License
    
    ## Contributors
    ${readmeQuestions.contributing} 
    
    ## Tests
    ${readmeQuestions.tests}
    
    ## Questions
    You can reach me via Github: ${readmeQuestions.github}
    Or you can email me at: ${readmeQuestions.email}
    `

    fs.writeFile('generatedREADME.md', readme,(err) => {
        err ? console.log(err):console.log("Sucess");
    })
})