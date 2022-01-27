const Employee = require("./employee");

class Engineer extends Employee {
    constructor (name, id, email, gitHub) {
        super(name, id, email);
        this.gitHub = gitHub;
    } 
    getRole() {
        return "Engineer";
    }
    getGitHUb() {
        return this.gitHub;
    }
}



console.log("Engineer's Info: ");
module.exports = Engineer;
