const Intern = require("../lib/intern");

describe("intern", () => {
    describe("getName", () => {
        it("should return an object containing name", () => {
            const obj = new Intern("Michelle", 3, "mic@tech.com", "DCU");

            expect(obj.getName()).toEqual("Michelle");
        });
    });
    describe("getId", () => {
        it("should return an object containing id", () => {
            const obj = new Intern("Michelle", 3, "mic@tech.com", "DCU");

            expect(obj.getId()).toEqual(3);
        });
    });
    describe("getEmail", () => {
        it("should return an object containing email", () => {
            const obj = new Intern("Michelle", 3, "mic@tech.com", "DCU");

            expect(obj.getEmail()).toEqual("mic@tech.com");
        })
    })
    describe("getSchool", () => {
        it("should return an object containing the school", () => {
            const obj = new Intern("Michelle", 3, "mic@tech.com", "DCU");

            expect(obj.getSchool()).toEqual("DCU");
        })
    })
    describe("getRole", () => {
        it("should return Employee prompt questions", () => {
            const obj = new Intern("Michelle", 3, "mic@tech.com", "DCU");
            expect(obj.getRole()).toEqual("Intern");
        })
    })
})