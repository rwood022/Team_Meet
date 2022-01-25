const { TestScheduler } = require("rxjs/testing");
const Employee = require("./employee");

class Manager extends Employee {
    constructor(officeNumber) {
        super("Beyonce", 9481, "bkc@tech.com");
        this.officeNumber = officeNumber;
    }


    // checkNumber() {
    //     if (this.officeNumber.length < 10000000000) {
    //         console.log(
    //             "Must include area code with office phone number."
    //         );
    //     } else {
    //         console.log(`You have entered ${this.officeNumber}`);
    //     }
    // };

}

const manager = new Manager(123-456-7890);

console.log("Manager's Info: ");
manager.printInfo();
manager.getRole();