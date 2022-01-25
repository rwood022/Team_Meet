// const { iteratee } = require("lodash");
// const { hasUncaughtExceptionCaptureCallback } = require("process");
const Employee = require("../lib/employee");

describe("Employee", () => {
    //  prompts the user with questions from employee class (name, id, email)
    describe("getName", () => {
        it("should return an object containing a 'string' when called with the 'new' keyword", () => {
            const obj = new Employee("Tech.co");

            expect("string" in obj).toEqual(true);
        });
    });
    describe("getId", () => {
        it("should return an object containing a 'number' property when called with the 'new' keyword", () => {
            const obj = new Employee();

            expect("number" in obj).toEqual(true);
        });
    });


})



