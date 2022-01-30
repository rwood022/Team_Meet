class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    printInfo() {
        console.log(`This employee's name is ${this.name}, their id is ${this.id}, and their email is ${this.email}`)
    }
   
    getName() {
     return this.name;
    }

    getId() {
        return this.id;
  
    }

    getEmail() {
        return this.email;
    
    }  

    getRole() {
        return "Employee";
    }
}


module.exports = Employee;