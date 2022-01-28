const Engineer = require("../lib/engineer");

describe("Engineer", () => {
    describe("getName", () => {
        it("should return an object containing a 'string' when called with the 'new' keyword", () => {
            const obj = new Engineer("Tech.co");

            expect(obj.getName()).toEqual("Tech.co");
        });
    });
    describe("getId", () => {
        it("should return an object containing a 'number' property when called with the 'new' keyword", () => {
            const obj = new Engineer("Tech.co", 46, "r@gmail.com", "rmof.gitHub");

            expect(obj.getId()).toEqual(46);
        });
    });
    describe("getEmail", () => {
        it("should return an object containing a 'string' property when called with the 'new' keyword", () => {
            const obj = new Engineer("Tech.co", 46, "r@gmail.com", "rmof.gitHub");

            expect(obj.getEmail()).toEqual("r@gmail.com");
        })
    })
    describe("getGitHub", () => {
        it("should return an object containing a 'string' property when called with the 'new' keyword", () => {
            const obj = new Engineer("Tech.co", 46, "r@gmail.com", "rmof.gitHub");

            expect(obj.getGitHub()).toEqual("rmof.gitHub");
        })
    })
    describe("getRole", () => {
        it("should return Employee prompt questions", () => {
            const obj = new Engineer("Tech.co", 46, "r@gmail.com", "rmof.gitHub");
            expect(obj.getRole()).toEqual("Engineer");
        })
    })
})