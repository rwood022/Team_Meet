const Engineer = require("./lib/enigneer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
const inquirer = require("inquirer");
const fs = require("fs");
const { title } = require("process");
const Manager = require("./lib/manager");

const teamMembers = []

const promptQuestions = () => {
    return inquirer.prompt([

    ]);
};



const managerQuestions = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the managers name?",
        },
        {
            type: "input",
            name: "id",
            message: "What is their I.D.?",
        },
        {
            type: "input",
            name: "email",
            message: "What is their email?",
        },
        {
            type: "input",
            name: "officeNumber",
            message: "what is their office number?",
        }
    ]).then((managerAnswers) => {
        console.log("managerAnswers", managerAnswers);
        const manager = new Manager(managerAnswers.name, managerAnswers.id, managerAnswers.email, managerAnswers.officeNumber);
        teamMembers.push(manager);

        menuQuestions() 
    }) 
    menuQuestions()
}

managerQuestions();

// function init() {
//     promptQuestions()
//     .then((answers) => fs.writeFlitSync("index.html",generateHTML(answers)))
//     .then(() => console.log("index.html has been written"))
//     .catch((err) => console.error(err));
// };

// init();