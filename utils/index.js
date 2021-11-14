// const
const inquirer = require('inquirer');
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown');

// questions to generate readme
inquirer
    .prompt([
        {
            type:'input',
            name:'title',
            message:'Title of project.'
        },
        {
            type:'input',
            name:'description',
            message:'Description of project.'
        },
        {
            type:'list',
            name:'license',
            message:'Choose a license.',
            choices: ['None', 'MIT License', 'Appache License 2.0', 'Eclipse Public License 2.0', 'Mozilla Public License 2.0'],
        },
        {
            type:'input',
            name:'usage',
            message:'Instructions on how to use your project.'
        },
        {
            type:'input',
            name:'install',
            message:'Instructions on how to install your project.'
        },
        {
            type:'input',
            name:'test',
            message:'Instructions on how to test your project.'
        },
        {
            type:'input',
            name:'contribute',
            message:'Instructions on how to contribute to your project.'
        },
        {
            type:'input',
            name:'contributors',
            message:'Provide the GitHub links to those who you collaborated with to create your project.'
        },
        {
            type:'input',
            name:'email',
            message:'What is your email?'
        },
        {
            type:'input',
            name:'github',
            message:'What is your GitHub URL?'
        },
    ])

    .then((response) => {
        const generateReadME = generateMarkdown(response);    

        fs.writeFile("generateReadME.md", "generageReadME"), (err) => 
          err ? console.log(err) : console.log('Success!')
        });
    };

   

    init();

