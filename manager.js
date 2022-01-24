const Employee = require("./employee");

class Manager extends Employee {
    constructor(officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }


    checkNumber() {
        if (this.officeNumber.length < 10000000000) {
            console.log(
                "Must include area code with office phone number."
            );
        } else {
            console.log(`You have entered ${this.officeNumber}`);
        }
    };

}

console.log("Manager's Info: ");
Manager.printInfo();