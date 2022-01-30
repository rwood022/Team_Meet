const Employee = require("./employee");

class Intern extends Employee {
    constructor (name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getRole() {
        return "Intern";
    }
    getSchool(){
        return this.school;
    
    }
    
}



console.log("Intern's Info: ");
module.exports = Intern;