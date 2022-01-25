const Employee = require("./employee");

class Engineer extends Employee {
    constructor (gitHub) {
        super("Kelly", 94273, "kel@tech.com");
        this.gitHub = gitHub;
    } 
}
const engineer = [
    new Engineer("github.com/kel")
];

console.log("Engineer's Info: ");
engineer.printInfo();
engineer.get();
