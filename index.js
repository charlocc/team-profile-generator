const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require('./generatehtml');
const generateCard = require('./generatehtml');
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
const engineerQuestions =[
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
            const createdManager = new Manager(response.name, response.id, response.email, response.officeNumber)
            //push object to the array of team members
            teamMembers.push(createdManager);
            console.log(teamMembers);
            generateCard(createdManager);
            //run the init function to add more members
            init();
        })
}

// Engineer Function
const createEngineer = () => {
    inquirer
        .prompt(engineerQuestions)
        .then(response => {
            const createdEngineer = new Engineer(response.name, response.id, response.email, response.github)
            //push object to the array of team members
            teamMembers.push(createdEngineer);
            console.log(teamMembers);
            generateCard(createdEngineer);
            //run the init function to add more members
            init();
        })
}

// Intern function
const createIntern = () =>{
    inquirer
        .prompt(internQuestions)
        .then(response => {
            const createdIntern = new Intern (response.name, response.id, response.email, response.school)
            //push object to the array of team members 
            teamMembers.push(createdIntern);
            console.log(teamMembers);
            generateCard(createdIntern);
            //run the init function to add more members
            init();
        })
}

// Function to add the information to the generate HTML file
function init() {
    inquirer
        .prompt(startQuestion)
        .then(response => {
            console.log(response.role);
            switch (response.role) {
                case 'Manager':
                    createManager();
                break;
                case 'Engineer':
                    createEngineer();
                break;
                case 'Intern':
                    createIntern();
                break;
                case 'Done':
                    console.log('Thank you for building your team');
                    response=>{fs.writeFile("index.html", generateHTML(teamMembers), (err) =>
                    err ? console.log(err) : console.log('success')
                    );}
                break;
            }
        })
}
// Function call to initialize app
init();

module.exports = init;



