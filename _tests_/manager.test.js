const Manager = require("../lib/manager");

describe("manager", () => {
    describe("getName", () => {
        it("should return an object containing name", () => {
            const obj = new Manager("Beyonce", 1, "bey@tech.com", 123456789);

            expect(obj.getName()).toEqual("Beyonce");
        });
    });
    describe("getId", () => {
        it("should return an object containing id", () => {
            const obj = new Manager("Beyonce", 1, "bey@tech.com", 123456789);

            expect(obj.getId()).toEqual(1);
        });
    });
    describe("getEmail", () => {
        it("should return an object containing email", () => {
            const obj = new Manager("Beyonce", 1, "bey@tech.com", 123456789);

            expect(obj.getEmail()).toEqual("bey@tech.com");
        })
    })
    describe("getOffice", () => {
        it("should return an object containing the office number", () => {
            const obj = new Manager("Beyonce", 1, "bey@tech.com", 123456789);

            expect(obj.getOffice()).toEqual(123456789);
        })
    })
    describe("getRole", () => {
        it("should return Employee prompt questions", () => {
            const obj = new Manager("Beyonce", 1, "bey@tech.com", 123456789);
            expect(obj.getRole()).toEqual("Manager");
        })
    })
})