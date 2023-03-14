// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require('./Utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please provide a brief description of your project:'
    },
    
    {
      type: 'input',
      name: 'installation',
      message: 'Please provide installation instructions for your project:'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please provide usage information for your project:'
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Please provide contribution guidelines for your project:'
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Please provide testing instructions for your project:'
    },
    {
      type: 'input',
      name: 'questions',
      message: 'Please provide contact information for any questions about your project:'
    },
    {
      type: 'list',
      name: 'license',
      message: 'Please choose a license for your project:',
      choices: ['MIT', 'Apache', 'GPL', 'None']
    },
  ];
  

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
      if (err) {
        console.error(err);
      } else {
        console.log(`File ${fileName} has been generated!`);
      }
    });
  }
  
  module.exports = writeToFile;
  

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then(answers => {
      console.log('Generating README...');
      const markdown = generateMarkdown(answers);
      fs.writeFile('README.md', markdown, err => {
        if (err) {
          console.error(err);
        } else {
          console.log('README.md created!');
        }
      });
    });
}


// Function call to initialize app
init();
