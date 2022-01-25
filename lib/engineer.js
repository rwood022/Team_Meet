const Employee = require("./employee");

class Engineer extends Employee {
    constructor (gitHub) {
        super("Lauren", 94273, "ljm@tech.com");
        this.gitHub = gitHub;
    }

    
}
const engineer = [
    new Engineer("github.com/ljm")
];

module.exports = {
    Engineer,
    engineer
};