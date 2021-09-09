const fs = require('fs');
const inquirer = require('inquirer');
const jest = require('jest');
const generateHTML = require('./generatehtml');
const teamMembers = [];
const teamCardsEl = document.querySelector('team-cards');

// Add start function 
const startQuestion =[
    {
        type: 'list',
        message: 'What type of employee would you like to add?',
        name: 'role',
        choices: ['Manager', 'Engineer', 'Intern']
    },
]


// Manager Function
const createManager = () => {
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
    inquirer.prompt(engineerQuestions)
    // .then() call constructor with answers, push object to the array of team members and then call init
}

// Engineer Function
const createEngineer = () => {
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
    inquirer.prompt(engineerQuestions)
    // .then() call constructor with answers, push object to the array of team members and then call init
}

// Intern function
const createIntern = () =>{
    const engineerQuestions=[
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
    inquirer.prompt(engineerQuestions)
    // .then() call constructor with answers, push object to the array of team members and then call init
}

// Function to add the information to the generate HTML file
function init() {inquirer
    .prompt(startQuestion)
    .then(response => {
        switch (response) {
            case 'Manager':
                createManager();
            break;
            case 'Engingeer':
                createEngingeer();
            break;
            case 'Intern':
                createIntern();
            break;
        default:
            console.log('Please pick an employee type')
        }
        
        
        fs.writeFile("index.html", generateHTML(response), (err) =>
        err ? console.log(err) : console.log('success')
        );  
    })
}

// Function call to initialize app
init();



