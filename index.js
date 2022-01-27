const inquirer = require("inquirer");
const fs = require("fs");
const { title } = require("process");


const promptQuestions = () => {
    return inqurer.prompt([

    ]);
};



function init() {
    promptQuestions()
    .then((answers) => fs.writeFlitSync("index.html",generateHTML(answers)))
    .then(() => console.log("index.html has been written"))
    .catch((err) => console.error(err));
};

init();