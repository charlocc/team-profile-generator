const fs = require('fs');
const inquirer = require('inquirer');
// const generateHTML = require('./generatehtml');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const teamMembers = [];
// Will add the team members to this array


// Add start function 
const startQuestion =[
    {
        type: 'list',
        message: 'What type of employee would you like to add?',
        name: 'role',
        choices: ['Manager', 'Engineer', 'Intern', 'Done']
    },
]

// Questions for Manager 
const managerQuestions=[
    {
        type: 'input',
        message: 'What is the name of this manager?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is the employee ID of this manager?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is the email of this manager?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is the office number of this manager?',
        name: 'officeNumber',
    },
]
// Questions for Engineer
const engineerQuestions=[
    {
        type: 'input',
        message: 'What is the name of this engineer?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is the employee ID of this engineer?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is the email of this engineer?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is the Github Username of this engineer?',
        name: 'github',
    },
]
// Questions for Intern
const internQuestions=[
    {
        type: 'input',
        message: 'What is the name of this intern?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is the employee ID of this intern?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is the email of this intern?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What school does this intern attend?',
        name: 'school',
    },
]

// Manager Function
const createManager = () => {
    inquirer
        .prompt(managerQuestions)
        .then(response => {
            Manager
            //push object to the array of team members
        })
    init();
}

// Engineer Function
const createEngineer = () => {
    inquirer
        .prompt(engineerQuestions)
        .then(response => {
            Engineer
            //push object to the array of team members
        })
    init();
}

// Intern function
const createIntern = () =>{
    inquirer
        .prompt(internQuestions)
        .then(response => {
            Intern
            //push object to the array of team members 
        })
    init();
}

// Function to add the information to the generate HTML file
function init() {
    inquirer
        .prompt(startQuestion)
        .then(response => {
            switch (response) {
                case 'Manager':
                    createManager();
                break;
                case 'Engingeer':
                    createEngineer();
                break;
                case 'Intern':
                    createIntern();
                break;
                case 'Done':
                    console.log('Thank you for building your team')
                break;
            default:
                console.log('Please pick a team member to add')
            }
        // fs.writeFile("index.html", generateHTML(response), (err) =>
        // err ? console.log(err) : console.log('success')
        // );  
    })
}

// Function call to initialize app
init();

module.exports = init;



