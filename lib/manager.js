const { TestScheduler } = require("rxjs/testing");
const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole() {
        return "Manager";
    }
    getSchool(){
        return this.officeNumber;
    }
    
  

}



console.log("Manager's Info: ");
module.exports = Manager;

