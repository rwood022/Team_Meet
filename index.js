const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
const inquirer = require("inquirer");
const fs = require("fs");
const { title } = require("process");
const { inherits } = require("util");

const team = [];


//     return inquirer.prompt([

//     ]);
// };
const promptQuestions = () => {
    const inputTeam = () => {
        inquirer.prompt([
            {
                type: "list",
                name: "menu",
                message: "Select another employee:",
                choices: ["manager", "engineer", "intern, done"]
            } 
 //switch structure, allows the excution of a specific code block - https://www.educative.io/edpresso/how-to-use-the-switch-statement-in-javascript
        ]).then((choice) => {
            switch(choice.menu) {
                case "manager":
                    managerQuestions();
                    break;
                case "engineer":
                    engineerQuestions();
                    break;
                case "intern":
                    internQuestions();
                    break;
                    default:
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
        ]).then((managerAnswers) => {
            console.log("managerAnswers", managerAnswers);
            const manager = new Manager(managerAnswers.name, managerAnswers.id, managerAnswers.email, managerAnswers.officeNumber, managerAnswers.menu);
            team.push(manager);

        
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
        },
        {
            type: "list",
            name: "menu",
            message: "Select another employee:",
            choices: ["manager", "engineer", "intern"]
        }
    ]).then((engineerAnswers) => {
        console.log("engineerAnswers", engineerAnswers);
        const engineer = new Engineer(engineerAnswers.name, engineerAnswers.id, engineerAnswers.email, engineerAnswers.gitHub);
        team.push(engineer);
    
       
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
        },
        {
            type: "list",
            name: "menu",
            message: "Select another employee:",
            choices: ["manager", "engineer", "intern"]
        }

    ]).then((internAnswers) => {
        console.log("internAnswers", internAnswers);
        const intern = new Intern(internAnswers.name, internAnswers.id, internAnswers.email, internAnswers.school);
        team.push(intern);
        
        
    })
    
}}
const generateTeam = team => {

    // create the manager html
    const generateManager = manager => {
        return`
        <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${manager.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${manager.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>
        `;
    };

    // create the html for engineers
    const generateEngineer = engineer => {
        return `
        <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${engineer.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${engineer.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
        </ul>
    </div>
</div>
        `;
    };

    // create the html for interns
    const generateIntern = intern => {
        return `
        <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${intern.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${intern.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
            <li class="list-group-item">School: ${intern.getSchool()}</li>
        </ul>
    </div>
</div>
        `;
    };

    const html = [];

    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );
    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
    );

    return html.join("");

}

// export function to generate entire page
module.exports = team => {

    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">
                ${generateTeam(team)}
            </div>
        </div>
    </div>
</body>
</html>
    `;
};



// function init() {
    managerQuestions()
    engineerQuestions()
    internQuestions()
//         .then((answers) => fs.writeFlitSync("index.html",generateHTML(answers)))
//         .then(() => console.log("index.html has been written"))
//         .catch((err) => console.error(err));
// };

// init();