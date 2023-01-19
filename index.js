const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateHTML');
const path = require('path');
const OUTPUT_DIR = path.resolve(__dirname, 'dist/output');
const outputPath = path.join(OUTPUT_DIR, 'index.html');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const teamMembers = [];

const managerPrompt = () => {
  return inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
      },
      {
        type: 'input',
        name: 'id',
        message: 'Please enter your employee ID',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address',
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: 'Please enter your office number',
      },
    ])
    .then((data) => {
      const manager = new Manager(
        data.name,
        data.id,
        data.email,
        data.officeNumber
      );
      teamMembers.push(manager);
      menuPrompt();
    });
};

const menuPrompt = () => {
  return inquirer
    .prompt([
      {
        type: 'list',
        message: 'Please select one of the options below:',
        name: 'menu',
        choices: ['add an engineer', 'add an intern', 'finish building team'],
      },
    ])
    .then((data) => {
      switch (data.menu) {
        case 'add an engineer':
          engineerPrompt();
          break;
        case 'add an intern':
          internPrompt();
          break;
        case 'finish building team':
          createTeam();
      }
    });
};

const engineerPrompt = () => {
  return inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of engineer?',
      },
      {
        type: 'input',
        name: 'id',
        message: 'Please enter their employee ID',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Please enter their email address',
      },
      {
        type: 'input',
        name: 'github',
        message: 'Please enter their Github username',
      },
    ])
    .then((data) => {
      const engineer = new Engineer(
        data.name,
        data.id,
        data.email,
        data.github
      );
      teamMembers.push(engineer);
      menuPrompt();
    });
};

const internPrompt = () => {
  return inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of intern?',
      },
      {
        type: 'input',
        name: 'id',
        message: 'Please enter their employee ID',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Please enter their email address',
      },
      {
        type: 'input',
        name: 'school',
        message: 'Please enter their school',
      },
    ])
    .then((data) => {
      const intern = new Intern(data.name, data.id, data.email, data.school);
      teamMembers.push(intern);
      menuPrompt();
    });
};

const createTeam = () => {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
  }
  fs.writeFileSync(outputPath, generateHTML(teamMembers), 'utf-8');
};

managerPrompt();
