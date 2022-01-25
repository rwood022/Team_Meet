const Employee = require("./employee");

class Intern extends Employee {
    constructor (school) {
        super("Alica", 94274, "ack@tech.com");
        this.school = school;
    }
    
}

const intern = new Intern("Georgia Tech")

console.log("Intern's Info: ");
intern.printInfo();
intern.getRole();