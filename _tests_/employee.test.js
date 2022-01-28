const Employee = require("../lib/employee");

describe("Employee", () => {
    //  prompts the user with questions from employee class (name, id, email)
    describe("getName", () => {
        it("should return name", () => {
            const obj = new Employee("john", 45, "j@gmail.com");

            expect(obj.getName()).toEqual("john");
        });
    });
    describe("getId", () => {
        it("should return an object containing a 'number' property when called with the 'new' keyword", () => {
            const obj = new Employee("john", 45, "j@gmail.com");

            expect(obj.getId()).toEqual(45);
        });
    });
    describe("getEmail", () => {
        it("should return an object containing a 'string' property when called with the 'new' keyword", () => {
            const obj = new Employee("john", 45, "j@gmail.com");

            expect(obj.getEmail()).toEqual("j@gmail.com");
        })
    })
    describe("getRole", () => {
        it("should return Employee prompt questions", () => {
            const obj = new Employee("john", 45, "j@gmail.com");
            expect(obj.getRole()).toEqual("Employee");
        })
    })


})



