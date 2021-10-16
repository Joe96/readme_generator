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
        message: 'Repo name?',
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
        message: 'Do you have LinkedIn profile you would like to share?',
        name: 'userGithub',
    },
    {
        type: 'input',
        message: 'Do you have Github profile you would like to share?',
        name: 'userEmail',
    },
]).then (function (readmeQuestions) {
    console.log(readmeQuestions)

    var readme=` 
${readmeQuestions.username}
${readmeQuestions.repoName}
${readmeQuestions.description}
${readmeQuestions.installation}
${readmeQuestions.usage}
${readmeQuestions.contributing} 
${readmeQuestions.testing} 
${readmeQuestions.license} 
${readmeQuestions.userGithub} 
${readmeQuestions.userEmail} 
    `

    fs.writeFile('generatedREADME.md', readme,(err) => {
        err ? console.log(err):console.log("Sucess");
    })
})