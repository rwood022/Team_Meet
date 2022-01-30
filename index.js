const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
const inquirer = require("inquirer");
const fs = require("fs");
const { title } = require("process");
const { inherits } = require("util");
const team = [];



const inputTeam = () => {
    inquirer.prompt([
        {
            type: "list",
            name: "menu",
            message: "Select another employee:",
            choices: ["manager", "engineer", "intern", "done"]
        } 
 //Switch Structure, "allows the execution of a specific code block depending upon the evaluation of an expression."- https://www.educative.io/edpresso/how-to-use-the-switch-statement-in-javascript
    ]).then((choices) => {
        switch(choices.menu) {
            case "manager":
                managerQuestions();
                break;
            case "engineer":
                engineerQuestions();
                break;
            case "intern":
                internQuestions();
                break;
            case "done":
                init();
        }
    })
}

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
        //Tutor helped with .then functions
    ]).then((managerAnswers) => {
        console.log("managerAnswers", managerAnswers);
        const manager = new Manager(managerAnswers.name, managerAnswers.id, managerAnswers.email, managerAnswers.officeNumber, managerAnswers.menu);
        team.push(manager);
        inputTeam();
    })
}
    
const engineerQuestions = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the engineers name?",
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
            name: "gitHub",
            message: "what is their GitHub?",
        }
    ]).then((engineerAnswers) => {
        console.log("engineerAnswers", engineerAnswers);
        const engineer = new Engineer(engineerAnswers.name, engineerAnswers.id, engineerAnswers.email, engineerAnswers.gitHub);
        team.push(engineer);
        inputTeam();
    })
}

const internQuestions = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the interns name?",
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
            name: "school",
            message: "Where did they go to school?",
        }
    ]).then((internAnswers) => {
        console.log("internAnswers", internAnswers);
        const intern = new Intern(internAnswers.name, internAnswers.id, internAnswers.email, internAnswers.school);
        team.push(intern);
        inputTeam();
    })
    
};

//intializes application
init = () => {
    inputTeam()
    .then((team) => fs.writeFileSync("index.html", generateTeam(team)))
    .then(() => console.log("index.html has been written"))
    .catch((err) => console.error(err));
};


inputTeam();